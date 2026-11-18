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
- Ảnh 1: Code chương trình 
- <img width="500" height="70" alt="image" src="https://github.com/user-attachments/assets/ac12a093-8316-4813-943d-f8db54bf39a4" />

- Ảnh 2: Kết quả chạy chương trình trên Terminal.
- <img width="455" height="340" alt="image" src="https://github.com/user-attachments/assets/3c230e47-775f-46bc-84d9-648d341634f0" />
<img width="360" height="238" alt="image" src="https://github.com/user-attachments/assets/2f8c09f6-f46c-4843-b674-c92b39377875" />


- Ảnh 3: Dữ liệu đã cập nhật trên MongoDB Compass.
- <img width="1301" height="323" alt="image" src="https://github.com/user-attachments/assets/e8e2f0f5-ef4f-4add-bb1a-5a367485c439" />
<img width="1073" height="597" alt="image" src="https://github.com/user-attachments/assets/d2851934-5bf7-47ab-b34a-fb6438a4254d" />



## 7. Kết luận
Đã hoàn thành bài thực hành tìm kiếm, cập nhật và sắp xếp dữ liệu MongoDB bằng Node.js.
