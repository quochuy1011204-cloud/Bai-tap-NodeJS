# BÀI 4: THÊM VÀ HIỂN THỊ DỮ LIỆU MONGODB


---

## 1. MỤC TIÊU

Xây dựng chương trình Node.js kết nối với MongoDB để thêm và hiển thị danh sách sinh viên.

## 2. YÊU CẦU THỰC HIỆN

- Sử dụng Node.js và module `mongodb`.
- Kết nối MongoDB đang chạy trên máy tính.
- Sử dụng database `qlsinhvien`.
- Sử dụng collection `students`.
- Thêm ít nhất 3 sinh viên bằng hàm `insertMany()`.
- Sử dụng hàm `find()` để hiển thị danh sách sinh viên.
- Đóng kết nối MongoDB sau khi hoàn thành.



## 3. CÀI ĐẶT MÔI TRƯỜNG

**Bước 1:** Cài đặt Node.js.

**Bước 2:** Khởi động MongoDB Server trên máy tính.

**Bước 3:** Mở Terminal tại thư mục `Bt04` và cài đặt thư viện MongoDB:

```bash
npm install mongodb
```

## 4. CÁCH CHẠY CHƯƠNG TRÌNH

Mở Terminal trong VS Code và thực hiện các lệnh:

**Bước 1: Di chuyển đến thư mục Bt04**

```powershell
cd "C:\HUY CDCNTT18A\Bai3\Bt04"
```

**Bước 2: Chạy chương trình**

```bash
node.exe bai04.js
```

## 5. KẾT QUẢ THỰC HIỆN

Chương trình thực hiện thành công các chức năng:

- Kết nối MongoDB thành công.
- Tạo và sử dụng database `qlsinhvien`.
- Sử dụng collection `students`.
- Thêm thành công 3 sinh viên bằng `insertMany()`.
- Hiển thị danh sách sinh viên bằng `find()`.
- Đóng kết nối MongoDB sau khi hoàn thành.

### Dữ liệu sinh viên đã thêm

| Mã sinh viên | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Nguyen Van An | 20 | 8.5 |
| SV002 | Tran Thi Binh | 21 | 7.5 |
| SV003 | Le Van Cuong | 20 | 9.0 |

### Database trên MongoDB Compass

- Database: `qlsinhvien`
- Collection: `students`
- Tổng số document: 3

## 6. HÌNH ẢNH MINH CHỨNG

**Ảnh 1: Code chương trình bai04.js**

<img width="348" height="33" alt="image" src="https://github.com/user-attachments/assets/e2c21963-9fda-4a1e-a923-d8fe6dec6401" />


**Ảnh 2: Kết quả chạy chương trình trên Terminal**

<img width="451" height="286" alt="image" src="https://github.com/user-attachments/assets/b723e472-0119-42e3-b903-e01769968953" />


**Ảnh 3: Dữ liệu trên MongoDB Compass**

<img width="1361" height="313" alt="image" src="https://github.com/user-attachments/assets/2d81496f-5272-4dd2-a31d-0753330e90bd" />
<img width="1124" height="597" alt="image" src="https://github.com/user-attachments/assets/97ae40ea-b81c-4448-81f6-a593f7a4be1b" />


## . KẾT LUẬN

Qua bài thực hành, em đã biết cách sử dụng Node.js kết nối với MongoDB, thêm nhiều dữ liệu bằng `insertMany()`, truy vấn dữ liệu bằng `find()` và đóng kết nối sau khi hoàn thành.

**Bài thực hành đã hoàn thành theo đúng yêu cầu đề bài.**
