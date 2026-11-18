
const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

// Danh sach 3 sinh vien
const sinhVien = [
    {
        hoten: 'Nguyen Quoc Huy',
        diemToan: 8,
        diemVan: 9,
        diemAnh: 8.5
    },
    {
        hoten: 'Nguyen Van Duc',
        diemToan: 7,
        diemVan: 6,
        diemAnh: 8
    },
    {
        hoten: 'Tran Thi Tâm',
        diemToan: 4,
        diemVan: 5,
        diemAnh: 4.5
    }
];

// Hien thi ket qua hoc tap
console.log('===== KET QUA HOC TAP SINH VIEN =====');

sinhVien.forEach((sv, index) => {
    const diemTB = tinhDiemTrungBinh(
        sv.diemToan,
        sv.diemVan,
        sv.diemAnh
    );

    const loai = xepLoai(diemTB);

    console.log(`\nSinh vien ${index + 1}:`);
    console.log('Ho ten:', sv.hoten);
    console.log('Diem trung binh:', diemTB.toFixed(2));
    console.log('Xep loai:', loai);
});
