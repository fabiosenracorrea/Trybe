import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PW,
  database: 'rest_exercicios'
});

export default connection;