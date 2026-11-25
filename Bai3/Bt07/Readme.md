# BÀI 7: XỬ LÝ THAM SỐ URL TRÊN WEB SERVER


## 1. Mục tiêu
- Sử dụng module `http` và đối tượng `URL`.
- Tạo Web Server tại cổng 3001.
- Xử lý tham số URL bằng `searchParams`.
- Kiểm tra dữ liệu đầu vào và trả về lỗi phù hợp.

## 2. Nội dung thực hiện

Tạo file `bai07.js` thực hiện:

- Truy cập `/hello?name=Minh`: hiển thị Xin chao Minh!
- Truy cập `/sum?a=10&b=20`: hiển thị Tong = 30.
- Báo lỗi khi thiếu tham số.
- Báo lỗi khi giá trị không hợp lệ.
- Trả về HTTP 404 khi đường dẫn không tồn tại.

## 3. Các lệnh thực hiện

```powershell
cd "C:\HUY CDCNTT18A\Bai3\Bt07"
node.exe bai07.js
```

## 4. Các đường dẫn kiểm tra

- http://localhost:3001/hello?name=Minh
- http://localhost:3001/sum?a=10&b=20
- http://localhost:3001/hello
- http://localhost:3001/sum?a=abc&b=20
- http://localhost:3001/test

## 5. Kết quả

Web Server chạy thành công tại cổng 3001. Các chức năng xử lý tham số URL, tính tổng, kiểm tra dữ liệu và xử lý lỗi hoạt động đúng yêu cầu.

## 6. Hình ảnh minh chứng

- Ảnh 1: Giao diện Terminal chạy Web Server.

- Ảnh 2: Kết quả lời chào.
- Ảnh 3: Kết quả tính tổng.
- Ảnh 4: Kết quả kiểm tra lỗi.

## 7. Kết luận

Hoàn thành bài thực hành 7: Xử lý tham số URL trên Web Server bằng Node.js.