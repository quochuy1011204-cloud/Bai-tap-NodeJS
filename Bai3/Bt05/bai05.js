
const { MongoClient } = require('mongodb');

// Ket noi MongoDB
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // Ket noi den MongoDB
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        // Chon database va collection cua Bai 4
        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        // 1. Tim sinh vien co diem >= 7
        console.log('\n1. Danh sach sinh vien co diem >= 7:');

        const danhSach = await collection
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log(danhSach);

        // 2. Cap nhat diem sinh vien SV001
        console.log('\n2. Cap nhat diem sinh vien SV001:');

        const result = await collection.updateOne(
            { masv: 'SV001' },
            { $set: { diem: 9.5 } }
        );

        console.log('So sinh vien duoc cap nhat:', result.modifiedCount);

        // 3. Hien thi thong tin sau khi cap nhat
        console.log('\n3. Thong tin SV001 sau khi cap nhat:');

        const sinhVien = await collection.findOne({ masv: 'SV001' });

        console.log(sinhVien);

    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        // Dong ket noi MongoDB
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
