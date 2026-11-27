# BÀI 4: XÂY DỰNG WEB VỚI EXPRESS FRAMEWORK

## 1. Giới thiệu

Xây dựng website cá nhân sử dụng Node.js và Express Framework.

Website có giao diện HTML/CSS đơn giản, menu điều hướng và các chức năng giới thiệu thông tin cá nhân.

## 2. Khởi tạo dự án Node.js và cài đặt Express

Mở CMD và thực hiện các lệnh:

```cmd
cd /d C:\CD-CNTT18A\Bt01
npm init -y
npm install express
```

## 3. Xây dựng các Route

Sử dụng Express để xây dựng 5 Route:

| Route | Chức năng |
|---|---|
| `/` | Trang chủ |
| `/about` | Giới thiệu bản thân |
| `/skills` | Hiển thị kỹ năng |
| `/hobbies` | Hiển thị sở thích |
| `/contact` | Thông tin liên hệ |

### Nội dung các trang

- **Trang chủ:** Chào mừng người dùng đến website.
- **Giới thiệu:** Giới thiệu bản thân và ngành học.
- **Kỹ năng:** Hiển thị các kỹ năng HTML, CSS, JavaScript, Node.js và Express.
- **Sở thích:** Hiển thị các sở thích cá nhân.
- **Liên hệ:** Hiển thị thông tin liên hệ.

## 4. Thiết kế giao diện HTML/CSS

- Sử dụng HTML để xây dựng nội dung website.
- Sử dụng CSS để thiết kế màu sắc, bố cục và kiểu chữ.
- Tạo menu điều hướng để chuyển đổi giữa 5 trang.
- Thiết kế giao diện tương thích với màn hình máy tính và điện thoại.

## 5. Xử lý đường dẫn không tồn tại (HTTP 404)

Sử dụng middleware `app.use()` để kiểm tra những đường dẫn không được khai báo.

Khi người dùng truy cập đường dẫn không tồn tại, website hiển thị thông báo:

**404 - Không tìm thấy trang**

## 6. Chạy chương trình trên localhost

Lệnh chạy:

```cmd
node app.js
```

Địa chỉ website:

http://localhost:3000/

### Kiểm tra các Route

| Trang | Đường dẫn |
|---|---|
| Trang chủ | http://localhost:3000/ |
| Giới thiệu | http://localhost:3000/about |
| Kỹ năng | http://localhost:3000/skills |
| Sở thích | http://localhost:3000/hobbies |
| Liên hệ | http://localhost:3000/contact |
| Kiểm tra 404 | http://localhost:3000/abcxyz |

## 7. Ảnh minh chứng localhost

Bổ sung ảnh chụp thực tế sau khi chạy chương trình:

- Trang chủ
- <img width="1447" height="600" alt="image" src="https://github.com/user-attachments/assets/7c108781-174e-40c8-94e5-9546e1494c2d" />


- Trang giới thiệu
- <img width="1562" height="740" alt="image" src="https://github.com/user-attachments/assets/e074b73b-6a84-4e91-a4ca-4d60fb0498a1" />

- Trang kỹ năng
- <img width="1153" height="713" alt="image" src="https://github.com/user-attachments/assets/8c0b562e-78e3-45b1-9a65-e3a7e3323546" />

- Trang sở thích
- <img width="1192" height="732" alt="image" src="https://github.com/user-attachments/assets/6094dcb9-ec76-4739-9954-836b2825a413" />

- Trang liên hệ
- <img width="1497" height="868" alt="image" src="https://github.com/user-attachments/assets/bd5f42e7-08e3-45c0-a754-f51df8993a4c" />

- Trang lỗi 404
- <img width="1190" height="631" alt="image" src="https://github.com/user-attachments/assets/0180c446-1aab-49f5-96a2-5cd2cd8f3ccb" />

-






