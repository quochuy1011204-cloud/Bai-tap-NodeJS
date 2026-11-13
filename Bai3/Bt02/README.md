# BÀI 2 - TẠO WEB SERVER VỚI NODE.JS

**Sinh viên:** Nguyễn Quốc Huy

## 1. Mục tiêu
Tạo Web Server bằng Node.js sử dụng module http.

## 2. Nội dung thực hiện
- Sử dụng module http tạo Web Server tại cổng 3000.
- Truy cập `/` hiển thị lời chào và mã sinh viên.
- Truy cập `/about` hiển thị thông tin giới thiệu bản thân.
- Truy cập đường dẫn không tồn tại trả về mã trạng thái HTTP 404.

## 3. Cách chạy chương trình

**Bước 1:** Mở thư mục Bt02 bằng Visual Studio Code.

**Bước 2:** Mở Terminal trong VS Code.

**Bước 3:** Chuyển đến thư mục Bt02:

```powershell
cd "C:\HUY CDCNTT18A\Bai3\Bt02"
```

**Bước 4:** Chạy chương trình:

```powershell
node.exe bai02.js
```

**Bước 5:** Mở trình duyệt và truy cập:

- Trang chủ: http://localhost:3000
- Trang giới thiệu: http://localhost:3000/about
- Trang lỗi 404: http://localhost:3000/abc

## 4. Kết quả
- Trang chủ hiển thị lời chào và mã sinh viên.
- Trang about hiển thị thông tin giới thiệu bản thân.
- Đường dẫn không tồn tại trả về mã trạng thái HTTP 404.

## 5. Hình ảnh minh chứng
- Ảnh 1: Code file bai02.js.
- Ảnh 2: Terminal chạy chương trình.
- Ảnh 3: Kết quả trang chủ.
- Ảnh 4: Kết quả trang about.
- Ảnh 5: Kết quả trang lỗi 404.

## 6. Kết luận
Đã hoàn thành bài thực hành tạo Web Server bằng Node.js sử dụng module http tại cổng 3000.