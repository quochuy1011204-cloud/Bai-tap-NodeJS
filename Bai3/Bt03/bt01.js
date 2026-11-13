
const fs = require('fs');

// Thong tin sinh vien
const hoTen = "Nguyen Quoc Huy";
const maSinhVien = "CD-CNTT18A16";
const tenLop = "CD-CNTT18A";

// Tao file thongtin.txt
fs.writeFile('thongtin.txt', 
    `Ho ten: ${hoTen}\nMa sinh vien: ${maSinhVien}\n`,
    (err) => {
        if (err) throw err;

        console.log("Da tao file thongtin.txt");

        // Doc noi dung file lan 1
        fs.readFile('thongtin.txt', 'utf8', (err, data) => {
            if (err) throw err;

            console.log("\nThong tin ban dau:");
            console.log(data);

            // Ghi noi them ten lop
            fs.appendFile('thongtin.txt',
                `Ten lop: ${tenLop}\n`,
                (err) => {
                    if (err) throw err;

                    console.log("Da ghi them ten lop!");

                    // Doc lai file sau khi cap nhat
                    fs.readFile('thongtin.txt', 'utf8', (err, data) => {
                        if (err) throw err;

                        console.log("\nThong tin sau khi cap nhat:");
                        console.log(data);
                    });
                }
            );
        });
    }
);
