
const { MongoClient } = require('mongodb');

// Ket noi MongoDB tren may tinh
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // Ket noi MongoDB
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        // Chon database va collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        // Them 3 sinh vien
        const students = [
            {
                masv: 'SV001',
                hoten: 'Nguyen Van An',
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: 'SV002',
                hoten: 'Tran Thi Binh',
                tuoi: 21,
                diem: 7.5
            },
            {
                masv: 'SV003',
                hoten: 'Le Van Cuong',
                tuoi: 20,
                diem: 9
            }
        ];

        const result = await collection.insertMany(students);
        console.log('So sinh vien da them:', result.insertedCount);

        // Hien thi danh sach sinh vien
        console.log('\nDanh sach sinh vien:');

        const danhSach = await collection.find().toArray();

        console.log(danhSach);

    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        // Dong ket noi
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
