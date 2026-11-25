
const fs = require('fs');
const path = require('path');

async function main() {
  try {
    // 1. Tao thu muc data
    const thuMuc = path.join(__dirname, 'data');
    await fs.promises.mkdir(thuMuc, { recursive: true });
    console.log('Da tao thu muc data.');

    // 2. Tao file ghichu.txt va ghi 3 dong noi dung
    const fileCu = path.join(thuMuc, 'ghichu.txt');

    const noiDung = [
      'KE HOACH CONG VIEC CA NHAN',
      'Hoan thanh bai tap NodeJS dung thoi han.',
      'On tap File System va ren luyen ky nang lap trinh.'
    ].join('\n');

    await fs.promises.writeFile(fileCu, noiDung, 'utf8');
    console.log('Da ghi 3 dong noi dung vao ghichu.txt.');

    // 3. Doi ten file bang fs.rename()
    const fileMoi = path.join(thuMuc, 'ghichu_moi.txt');

    // Xoa file dich neu da ton tai de co the chay lai
    try {
      await fs.promises.unlink(fileMoi);
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
    }

    await fs.promises.rename(fileCu, fileMoi);
    console.log('Da doi ten ghichu.txt thanh ghichu_moi.txt.');

    // 4. Doc va hien thi noi dung sau khi doi ten
    const duLieu = await fs.promises.readFile(fileMoi, 'utf8');
    console.log('\nNoi dung file sau khi doi ten:');
    console.log(duLieu);

    // 5. Tao file tam.txt
    const fileTam = path.join(thuMuc, 'tam.txt');
    await fs.promises.writeFile(fileTam, 'File tam dung de kiem tra thao tac xoa.', 'utf8');
    console.log('\nDa tao file tam.txt.');

    // 6. Xoa file tam.txt bang fs.unlink()
    await fs.promises.unlink(fileTam);
    console.log('Da xoa file tam.txt bang fs.unlink().');

    console.log('\nHoan thanh bai thuc hanh so 8!');

  } catch (error) {
    console.log('Co loi xay ra:', error.message);
  }
}

main();
