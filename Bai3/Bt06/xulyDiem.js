
// Ham tinh diem trung binh 3 mon
function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

// Ham xep loai hoc tap
function xepLoai(diemTB) {
    if (diemTB >= 8) {
        return "Gioi";
    } else if (diemTB >= 6.5) {
        return "Kha";
    } else if (diemTB >= 5) {
        return "Trung binh";
    } else {
        return "Yeu";
    }
}

// Xuat cac ham de file khac su dung
module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};
