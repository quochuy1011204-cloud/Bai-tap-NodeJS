
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();

        const db = client.db('baitap_tan');
        const collection = db.collection('students');

        console.log('Ket noi MongoDB thanh cong!');
        console.log('So document hien co:', await collection.countDocuments());
    } catch (error) {
        console.error('Loi:', error.message);
    } finally {
        await client.close();
    }
}

main();
