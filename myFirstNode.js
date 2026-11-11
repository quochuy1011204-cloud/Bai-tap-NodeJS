
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end('<h1>Xin chào! Đây là bài Node.js của tôi.</h1>');
});

server.listen(8081, () => {
    console.log('Server dang chay tai http://localhost:8081');
});
