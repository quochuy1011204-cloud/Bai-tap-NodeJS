
const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (url.pathname === '/hello') {
        const name = url.searchParams.get('name');

        if (!name || !name.trim()) {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so name!');
        } else {
            res.end(`Xin chao ${name}!`);
        }
    }

    else if (url.pathname === '/sum') {
        const a = url.searchParams.get('a');
        const b = url.searchParams.get('b');

        if (a === null || b === null || a.trim() === '' || b.trim() === '') {
            res.statusCode = 400;
            res.end('Loi: Thieu tham so a hoac b!');
        } else if (!Number.isFinite(Number(a)) || !Number.isFinite(Number(b))) {
            res.statusCode = 400;
            res.end('Loi: a va b phai la so hop le!');
        } else {
            res.end(`Tong = ${Number(a) + Number(b)}`);
        }
    }

    else {
        res.statusCode = 404;
        res.end('Loi 404: Khong tim thay duong dan!');
    }
});

// Chay Web Server tai cong 3001
server.listen(3001, () => {
    console.log('1. Loi chao: http://localhost:3001/hello?name=Minh');
    console.log('2. Tinh tong: http://localhost:3001/sum?a=10&b=20');
    console.log('3. Thieu tham so: http://localhost:3001/hello');
    console.log('4. Gia tri khong hop le: http://localhost:3001/sum?a=abc&b=20');
    console.log('5. Duong dan 404: http://localhost:3001/test');
    console.log('================================');
});

