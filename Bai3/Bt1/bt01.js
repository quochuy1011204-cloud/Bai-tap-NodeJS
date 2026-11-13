
const http = require('http');

class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV001", "Nguyen Van An", 20, 8.5),
    new SinhVien("SV002", "Tran Thi Binh", 21, 4.5),
    new SinhVien("SV003", "Le Van Cuong", 20, 7.0),
    new SinhVien("SV004", "Pham Thi Dung", 22, 6.5),
    new SinhVien("SV005", "Hoang Van Em", 19, 3.5)
];

const sinhVienDat = danhSachSinhVien.filter(
    sv => sv.diem >= 5
);

// Hien thi danh sach tren Terminal
console.log("DANH SACH SINH VIEN DAT YEU CAU:");
console.log(sinhVienDat);

// Tao HTTP Server
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    const html = `
        <h1>DANH SACH SINH VIEN DAT YEU CAU</h1>
        ${sinhVienDat.map(sv => `
            <p>Ma sinh vien: ${sv.ma}</p>
            <p>Ho ten: ${sv.hoTen}</p>
            <p>Tuoi: ${sv.tuoi}</p>
            <p>Diem: ${sv.diem}</p>
            <hr>
        `).join('')}
    `;

    res.end(html);
});

