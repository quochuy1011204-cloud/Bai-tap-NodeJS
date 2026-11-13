
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Xin chao!</h1>
            <h2>Thong tin sinh vien</h2>
            <p>Ho va ten: Nguyen Quoc Huy</p>
            <p>Ma sinh vien: CD-CNTT18A</p>
            <a href="/about">Gioi thieu ban than</a>
        `);

    } else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>GIOI THIEU BAN THAN</h1>
            <p>Ho va ten: Nguyen Quoc Huy</p>
            <p>Toi la sinh vien dang hoc lap trinh Node.js.</p>
            <a href="/">Quay lai trang chu</a>
        `);

    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end('<h1>404 - Khong tim thay trang!</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
