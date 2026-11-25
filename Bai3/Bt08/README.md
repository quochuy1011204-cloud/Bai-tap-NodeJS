# Bài 8 – Quản lý tập tin với File System

## 1. Giới thiệu
Bài thực hành sử dụng Node.js để quản lý tập tin và thư mục thông qua module `fs`. Chương trình mô phỏng việc lưu kế hoạch công việc cá nhân, cập nhật tên tập tin, đọc dữ liệu và xử lý tập tin tạm.

## 2. Nội dung thực hiện
- Tạo thư mục `data` để lưu dữ liệu.
- Tạo tập tin `ghichu.txt`.
- Ghi 3 dòng nội dung kế hoạch cá nhân vào tập tin.
- Đổi tên `ghichu.txt` thành `ghichu_moi.txt` bằng `fs.rename()`.
- Đọc nội dung tập tin sau khi đổi tên và hiển thị ra Terminal.
- Tạo tập tin `tam.txt`.
- Xóa tập tin `tam.txt` bằng `fs.unlink()`.
- Hiển thị thông báo sau mỗi thao tác.

## 3. Công nghệ sử dụng
- Node.js
- Module `fs`
- Module `path`

## 4. Cách chạy chương trình

Mở Terminal tại thư mục `Bt08` và chạy lệnh:

```bash
node bai08.js
```

## 5. Kết quả
Chương trình thực hiện các thao tác quản lý tập tin thành công. Nội dung kế hoạch được ghi vào tập tin, đổi tên và đọc lại. Tập tin tạm được tạo và xóa sau khi hoàn thành.

Tập tin kết quả cuối cùng:

`data/ghichu_moi.txt`



## 6. Các hàm đã sử dụng

| Hàm | Chức năng |
|---|---|
| `mkdir()` | Tạo thư mục |
| `writeFile()` | Tạo và ghi nội dung tập tin |
| `rename()` | Đổi tên tập tin |
| `readFile()` | Đọc nội dung tập tin |
| `unlink()` | Xóa tập tin |

## . Tổng kết
Qua bài thực hành, em hiểu cách sử dụng module `fs` để thực hiện các thao tác cơ bản với tập tin trong Node.js, biết cách ghi, đọc, đổi tên và xóa tập tin, đồng thời xử lý các thao tác tuần tự bằng `async/await`.
## 7 ảnh khi chạy 
<img width="434" height="29" alt="image" src="https://github.com/user-attachments/assets/a02c3094-0a95-4534-9f4e-14ddd7efb6f4" />
<img width="382" height="240" alt="image" src="https://github.com/user-attachments/assets/f8b86358-8b00-4d1a-87e4-52b1d298bde9" />



