
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log('Ket noi MongoDB thanh cong!');

    const db = client.db('qlsinhvien');
    const students = db.collection('students_test');

    // Xoa du lieu B09 cu de tranh trung lap
    await students.deleteMany({
      masv: { $regex: /^B09_/ }
    });

    // Them 5 sinh vien
    await students.insertMany([
      { masv: 'B09_01', hoten: 'Pham Hoang Hai', tuoi: 20, diem: 8 },
      { masv: 'B09_02', hoten: 'Tran Quoc Huy', tuoi: 21, diem: 4 },
      { masv: 'B09_03', hoten: 'Ha Van Sam', tuoi: 19, diem: 7 },
      { masv: 'B09_04', hoten: 'Vo Thanh Phuc', tuoi: 20, diem: 3 },
      { masv: 'B09_05', hoten: 'Lam Minh Khang', tuoi: 22, diem: 6 }
    ]);

    console.log('\nDanh sach 5 sinh vien vua them:');
    console.log(await students.find({
      masv: { $regex: /^B09_/ }
    }).toArray());

    // Xoa 1 sinh vien theo ma
    const xoaMot = await students.deleteOne({
      masv: 'B09_01'
    });
    console.log('\nSo sinh vien xoa bang deleteOne:', xoaMot.deletedCount);

    // Xoa sinh vien co diem duoi 5
    const xoaNhieu = await students.deleteMany({
      masv: { $regex: /^B09_/ },
      diem: { $lt: 5 }
    });
    console.log('So sinh vien xoa bang deleteMany:', xoaNhieu.deletedCount);

    // Danh sach sinh vien con lai
    const conLai = await students.find({
      masv: { $regex: /^B09_/ }
    }).toArray();

    console.log('\nDanh sach sinh vien con lai:');
    console.log(conLai);

  } catch (error) {
    console.log('Loi:', error.message);
  } finally {
    await client.close();
  }
}

main();
