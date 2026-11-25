
const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main() {
  try {
    await client.connect();
    console.log('Ket noi MongoDB thanh cong!');

    const db = client.db('qlsinhvien');
    const departments = db.collection('departments');
    const students = db.collection('students_join');

    // Lam sach du lieu rieng cua bai 10
    await departments.deleteMany({
      makhoa: { $in: ['CNTT', 'TKDH'] }
    });

    await students.deleteMany({
      masv: { $regex: /^B10_/ }
    });

    // Tao danh sach khoa
    await departments.insertMany([
      { makhoa: 'CNTT', tenkhoa: 'Cong nghe phan mem' },
      { makhoa: 'TKDH', tenkhoa: 'Thiet ke truyen thong so' }
    ]);

    console.log('Da them 2 khoa.');

    // Tao danh sach sinh vien
    await students.insertMany([
      { masv: 'B10_01', hoten: 'Pham Hoang hai', makhoa: 'CNTT' },
      { masv: 'B10_02', hoten: 'Tran Quoc Huy', makhoa: 'TKDH' },
      { masv: 'B10_03', hoten: 'Ha Van Sam ', makhoa: 'CNTT' },
      { masv: 'B10_04', hoten: 'Lam Minh ', makhoa: 'TKDH' }
    ]);

    console.log('Da them 4 sinh vien.');

    // Ket noi sinh vien voi khoa
    const ketQua = await students.aggregate([
      {
        $match: { masv: { $regex: /^B10_/ } }
      },
      {
        $lookup: {
          from: 'departments',
          localField: 'makhoa',
          foreignField: 'makhoa',
          as: 'thongTinKhoa'
        }
      },
      {
        $unwind: '$thongTinKhoa'
      },
      {
        $project: {
          _id: 0,
          masv: 1,
          hoten: 1,
          makhoa: 1,
          tenkhoa: '$thongTinKhoa.tenkhoa'
        }
      }
    ]).toArray();

    console.log('\nKET QUA LIEN KET SINH VIEN VA KHOA:');
    console.table(ketQua);

  } catch (error) {
    console.log('Loi:', error.message);
  } finally {
    await client.close();
  }
}

main();
