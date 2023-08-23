import mysql2 from 'mysql2/promise';

const conexao = await mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DB 
})

console.log('DB conectado');

export default conexao