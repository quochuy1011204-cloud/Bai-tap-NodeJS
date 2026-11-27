
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

// Thiết lập template engine Handlebars
app.engine('handlebars', engine({
    defaultLayout: false
}));

app.set('view engine', 'handlebars');

// Xử lý yêu cầu GET đến đường dẫn '/'
app.get('/', (req, res) => {
    const name = 'John Doe';
    res.render('index', { name });
});

// Khởi động server và lắng nghe yêu cầu tại cổng 3000
app.listen(3000, () => {
    console.log('Server đang chạy tại cổng 3000');
});








