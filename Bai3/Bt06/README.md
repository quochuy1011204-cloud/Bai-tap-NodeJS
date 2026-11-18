# BÀI 6: XÂY DỰNG MODULE TÍNH KẾT QUẢ HỌC TẬP


## 1. MỤC TIÊU

Xây dựng module Node.js để tính điểm trung bình 3 môn học và xếp loại học tập cho sinh viên.

## 2. YÊU CẦU THỰC HIỆN

- Tạo hai tập tin `bai06.js` và `xulyDiem.js`.
- Trong `xulyDiem.js`, xây dựng hàm tính điểm trung bình của 3 môn.
- Xây dựng hàm xếp loại học tập.
- Sử dụng `module.exports` để xuất các hàm.
- Trong `bai06.js`, sử dụng `require()` để gọi các hàm.
- Tạo dữ liệu 3 sinh viên.
- Hiển thị họ tên, điểm trung bình và xếp loại trên Terminal.

## 3. QUY TẮC XẾP LOẠI

| Điểm trung bình | Xếp loại |
|---|---|
| Từ 8 trở lên | Giỏi |
| Từ 6.5 đến dưới 8 | Khá |
| Từ 5 đến dưới 6.5 | Trung bình |
| Dưới 5 | Yếu |


## 4. CHỨC NĂNG CÁC TẬP TIN

### File xulyDiem.js

- Xây dựng hàm `tinhDiemTrungBinh()` để tính điểm trung bình 3 môn.
- Xây dựng hàm `xepLoai()` để xác định kết quả học tập.
- Sử dụng `module.exports` để xuất hai hàm cho tập tin khác sử dụng.

### File bai06.js

- Sử dụng `require('./xulyDiem')` để gọi module.
- Khai báo danh sách 3 sinh viên.
- Tính điểm trung bình cho từng sinh viên.
- Xếp loại học tập.
- Hiển thị kết quả bằng `console.log()`.

## 5. CÁCH CHẠY CHƯƠNG TRÌNH

**Bước 1: Mở Terminal trong VS Code.**

**Bước 2: Di chuyển đến thư mục Bt06.**

```powershell
cd "C:\HUY CDCNTT18A\Bai3\Bt06"
```

**Bước 3: Chạy chương trình.**

```powershell
node.exe bai06.js
```

## 6. KẾT QUẢ THỰC HIỆN

Chương trình hiển thị thông tin của 3 sinh viên gồm:

- Họ tên sinh viên.
- Điểm trung bình 3 môn.
- Xếp loại học tập.

Kết quả dự kiến:

| Họ tên | Điểm trung bình | Xếp loại |
|---|---:|---|
| Nguyen Quoc Huy | 8.50 | Giỏi |
| Nguyen Van Duc | 7.00 | Khá |
| Tran Thi Tam | 4.50 | Yếu |

## 8. HÌNH ẢNH MINH CHỨNG

<img width="407" height="53" alt="image" src="https://github.com/user-attachments/assets/1cabe1ee-7814-4ad4-ad26-83acaf060a4c" />
<img width="409" height="284" alt="image" src="https://github.com/user-attachments/assets/20972ef0-67a8-4310-8b02-833a630a9011" />

