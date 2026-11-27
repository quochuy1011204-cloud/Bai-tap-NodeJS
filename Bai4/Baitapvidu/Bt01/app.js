
const express = require('express');
const app = express();
const PORT = 3000;

// CSS giao dien
const style = `
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f0f4f8;
    color: #333;
}

header {
    background: #2563eb;
    color: white;
    padding: 30px 20px;
    text-align: center;
}

header h1 {
    margin-bottom: 10px;
}

nav {
    background: #1e40af;
    padding: 16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

nav a:hover {
    color: #facc15;
}

.container {
    max-width: 1000px;
    margin: 35px auto;
    padding: 35px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

h2 {
    color: #2563eb;
    margin-bottom: 20px;
}

p {
    line-height: 1.8;
    margin-bottom: 12px;
}

ul {
    margin-left: 25px;
    line-height: 2;
}

footer {
    text-align: center;
    padding: 25px;
    color: #64748b;
}

.btn {
    display: inline-block;
    background: #2563eb;
    color: white;
    padding: 10px 18px;
    border-radius: 6px;
    text-decoration: none;
    margin-top: 10px;
}

.btn:hover {
    background: #1e40af;
}

@media (max-width: 600px) {
    nav {
        gap: 15px;
    }

    .container {
        margin: 20px;
        padding: 22px;
    }
}
</style>
`;

// Tao giao dien chung
function layout(title, content) {
    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        ${style}
    </head>
    <body>

        <header>
            <h1>TRANG WEB CÁ NHÂN</h1>
            <p>Giới thiệu bản thân và những điều tôi yêu thích</p>
        </header>

        <nav>
            <a href="/">Trang chủ</a>
            <a href="/about">Giới thiệu</a>
            <a href="/skills">Kỹ năng</a>
            <a href="/hobbies">Sở thích</a>
            <a href="/contact">Liên hệ</a>
        </nav>

        <main class="container">
            ${content}
        </main>

        <footer>
            &copy; 2026 - Website Express Framework
        </footer>

    </body>
    </html>
    `;
}

// Route trang chu
app.get('/', (req, res) => {
    res.send(layout('Trang chủ', `
        <h2>Chào mừng đến với trang web của tôi!</h2>
        <p>Đây là website cá nhân được xây dựng bằng Node.js và Express.</p>
        <p>Website giới thiệu thông tin cá nhân, kỹ năng và sở thích của tôi.</p>
        <p>Hãy sử dụng menu phía trên để khám phá các nội dung.</p>
    `));
});

// Route gioi thieu
app.get('/about', (req, res) => {
    res.send(layout('Giới thiệu', `
        <h2>Giới thiệu bản thân</h2>
        <p>Tôi là sinh viên ngành Công nghệ thông tin.</p>
        <p>Tôi yêu thích công nghệ, lập trình và khám phá những kiến thức mới.</p>
        <p>Tôi luôn cố gắng học hỏi và phát triển kỹ năng của bản thân.</p>
        <p>Mục tiêu của tôi là trở thành một lập trình viên giỏi trong tương lai.</p>
    `));
});

// Route ky nang
app.get('/skills', (req, res) => {
    res.send(layout('Kỹ năng', `
        <h2>Kỹ năng của tôi</h2>
        <p>Những kỹ năng tôi đang học tập và phát triển:</p>
        <ul>
            <li>HTML và CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express Framework</li>
            <li>Làm việc nhóm</li>
            <li>Giải quyết vấn đề</li>
        </ul>
    `));
});

// Route so thich
app.get('/hobbies', (req, res) => {
    res.send(layout('Sở thích', `
        <h2>Sở thích cá nhân</h2>
        <p>Trong thời gian rảnh, tôi thường tham gia những hoạt động yêu thích:</p>
        <ul>
            <li>Nghe nhạc</li>
            <li>Chơi game</li>
            <li>Du lịch và khám phá những địa điểm mới</li>
            <li>Tìm hiểu công nghệ</li>
            <li>Xem phim</li>
        </ul>
    `));
});

// Route lien he
app.get('/contact', (req, res) => {
    res.send(layout('Liên hệ', `
        <h2>Thông tin liên hệ</h2>
        <p> Họ Tên: NGUYỄN QUỐC HUY
        <p>Email: quochuy1011204@gmail.com</p>
        <p>Địa chỉ: Khánh Hòa</p>
        <p>Nếu bạn muốn trao đổi hoặc kết nối, hãy liên hệ với tôi.</p>
        <p>Cảm ơn bạn đã ghé thăm website!</p>
    `));
});

// Xu ly loi 404
app.use((req, res) => {
    res.status(404).send(layout('404 - Không tìm thấy trang', `
        <h2>404 - Không tìm thấy trang</h2>
        <p>Xin lỗi, đường dẫn bạn truy cập không tồn tại.</p>
        <a class="btn" href="/">Quay về trang chủ</a>
    `));
});

// Khoi dong server
app.listen(PORT, () => {
    console.log('Server dang chay tai http://localhost:' + PORT);
});
