
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });

    res.end('Hello World!');
});

server.listen(8080, () => {
    console.log('Server dang chay tai http://localhost:8080');
});
