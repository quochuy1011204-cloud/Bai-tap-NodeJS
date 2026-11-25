# Bài 10 – Liên kết hai Collection trong MongoDB

## 1. Giới thiệu
Bài thực hành sử dụng NodeJS và MongoDB để liên kết dữ liệu giữa hai collection bằng `aggregate()` và `$lookup`.

## 2. Nội dung thực hiện
- Kết nối MongoDB với database `qlsinhvien`.
- Tạo collection `departments` gồm 2 khoa:
  - CNTT – Công nghệ phần mềm.
  - TKDH – Thiết kế truyền thông số.
- Tạo collection `students_join` gồm 4 sinh viên.
- Sử dụng `aggregate()` và `$lookup` để liên kết sinh viên với khoa thông qua `makhoa`.
- Hiển thị mã sinh viên, họ tên, mã khoa và tên khoa.

## 3. Công nghệ sử dụng
- NodeJS
- MongoDB
- Module `mongodb`

## 4. Đường dẫn thư mục
`C:\HUY CDCNTT18A\Bai3\Bt10`

## 5. Cách chạy chương trình


cd "C:\HUY CDCNTT18A\Bai3\Bt10"
node.exe bai10.js
```

## 6. Kết quả
Chương trình kết nối MongoDB thành công, thêm 2 khoa và 4 sinh viên. Sau đó sử dụng `$lookup` để liên kết dữ liệu và hiển thị tên khoa tương ứng của từng sinh viên.

## 7. Hình ảnh minh chứng

### .. Kết quả chạy trên Terminal
<img width="675" height="274" alt="image" src="https://github.com/user-attachments/assets/1a989604-576a-49f4-abd8-72e35b1d662b" />



### .. Dữ liệu trên MongoDB Compass
<img width="739" height="647" alt="image" src="https://github.com/user-attachments/assets/7c5744bf-3885-4887-b755-5ee2fd4da51f" />

