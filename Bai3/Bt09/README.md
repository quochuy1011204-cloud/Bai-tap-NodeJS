# Bài 9 –Xóa dữ liệu có điều kiện trong MongoDB


## 1. Giới thiệu
Bài thực hành sử dụng NodeJS và MongoDB để thêm, xóa và hiển thị dữ liệu sinh viên.

## 2. Nội dung thực hiện
- Kết nối database `qlsinhvien`.
- Sử dụng collection `students_test`.
- Thêm 5 sinh viên mẫu gồm mã sinh viên, họ tên, tuổi và điểm.
- Sử dụng `deleteOne()` để xóa một sinh viên theo mã.
- Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5.
- Sử dụng `find()` để hiển thị danh sách sinh viên còn lại.

## 3. Công nghệ sử dụng
- NodeJS
- MongoDB
- Module `mongodb`

## 4. Đường dẫn thư mục
`C:\HUY CDCNTT18A\Bai3\Bt09`

## 5. Cách chạy chương trình

```powershell
cd "C:\HUY CDCNTT18A\Bai3\Bt09"
node.exe bai09.js
```

## 6. Kết quả
Chương trình kết nối MongoDB thành công, thêm 5 sinh viên, thực hiện xóa dữ liệu bằng `deleteOne()` và `deleteMany()`, sau đó hiển thị danh sách sinh viên còn lại.

## 7. Hình ảnh minh chứng

### 7.1. Hình ảnh  bai09.js
![Code bai09.js](anh-code.png)

### 7.2. Hình ảnh chạy chương trình trên Terminal
![Ket qua Terminal](anh-terminal.png)

### 7.3. Hình ảnh dữ liệu trên MongoDB Compass
![MongoDB Compass](anh-mongodb.png)