
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Thong tin sinh vien</title>
        </head>
        <body>
            <h1>THONG TIN SINH VIEN</h1>
            <p>Ho va ten: NGUYEN VAN A</p>
            <p>Ma sinh vien: SV001</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server dang chay tai http://localhost:3000');
});
