# BÀI 5: TÌM KIẾM, CẬP NHẬT VÀ SẮP XẾP MONGODB


## 1. Mục tiêu
Thực hành tìm kiếm, sắp xếp và cập nhật dữ liệu sinh viên trong MongoDB bằng Node.js.

## 2. Yêu cầu thực hiện
- Sử dụng collection `students` của database `qlsinhvien`.
- Tìm sinh viên có điểm lớn hơn hoặc bằng 7 bằng `find()` và `$gte`.
- Sắp xếp điểm giảm dần bằng `sort()`.
- Cập nhật điểm bằng `updateOne()` và `$set`.
- Hiển thị lại thông tin sau khi cập nhật.

## 3. Cài đặt thư viện

```powershell
npm install mongodb
```

## 4. Cách chạy chương trình

Mở Terminal tại thư mục Bt05:

```powershell
cd "C:\HUY CDCNTT18A\Bai3\Bt05"
node.exe bai05.js
```

## 5. Kết quả
- Kết nối MongoDB thành công.
- Hiển thị danh sách sinh viên có điểm từ 7 trở lên.
- Danh sách được sắp xếp theo điểm giảm dần.
- Cập nhật điểm sinh viên SV001 thành 9.5.
- Hiển thị lại thông tin sinh viên sau khi cập nhật.
- Đóng kết nối MongoDB thành công.

## 6. Hình ảnh minh chứng
- Ảnh 1: Code chương trình `bai05.js`.
- Ảnh 2: Kết quả chạy chương trình trên Terminal.
- Ảnh 3: Dữ liệu đã cập nhật trên MongoDB Compass.

## 7. Kết luận
Đã hoàn thành bài thực hành tìm kiếm, cập nhật và sắp xếp dữ liệu MongoDB bằng Node.js.