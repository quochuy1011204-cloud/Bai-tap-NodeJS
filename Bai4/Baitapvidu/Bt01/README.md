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

- Trang giới thiệu
- Trang kỹ năng
- Trang sở thích
- Trang liên hệ
- Trang lỗi 404
- Cửa sổ CMD chạy Express






