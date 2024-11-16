const express = require('express'); // mengimport express (tujuannya jika tidak ada express, maka akan error)
const app = express(); // menggunakan aplikasi express
const PORT = 2024; // port dari server

const { logger } = require('./middleware/log.middleware.js'); // membuat console.log jika ada user request


app.use(express.json()); // memanggil express.json secara global
app.use(logger); // menjalankan logger middleware

app.listen(PORT, 'localhost', () => {
    console.log(`Server Berhasil dijalankan! Klik disini untuk langsung mengakses localhostmu: http://localhost:${PORT}`);
}); // menerima perintah jika server berhasil dijalankan di port 2024

// data array pasien
let passiens = [
    {id: 1, nama_pasien: 'Jhon', umur_pasien: 20, gender: 'LAKI_LAKI',nomor_daftar_pasien: '1087620', ruang_dokter: 'A7'}
];

// mengambil semua data pasien 
app.get('/passiens', (request, response) => {
    response.status(200).json(passiens); 
});

// mengambil data pasien menggunakan id
app.get('/passiens/:id', (request, response) => {
    const DataPassiens = passiens.find(data => data.id === parseInt(request.params.id));

    if(DataPassiens) {
        response.json(DataPassiens); 
    }else{
        response.status(400).json({ 
            pesan: "Error! Data pasien tidak ditemukan."
        });
    }
});

// mengambil data pasien menggunakan nomor daftar pasien
app.get('/passiens/nomor/:nomor_daftar_pasien', (request, response) => {
    const DataPassiens = passiens.find(data => data.nomor_daftar_pasien === request.params.nomor_daftar_pasien); 

    if(DataPassiens) {
        response.json(DataPassiens); 
    }else{
        response.status(400).json({ 
            pesan: "Error! Data pasien tidak ditemukan."
        });
    }
});

// mengambil data pasien dari nama pasien
app.get('/passiens/nama/:nama_pasien', (request, response) => {
    const DataPassiens = passiens.find(data => data.nama_pasien === request.params.nama_pasien); 

    if(DataPassiens) {
        response.json(DataPassiens); 
    } else {
        response.status(400).json({ 
            pesan: "Error! Data pasien tidak ditemukan."
        });
    }
});