import mysql from 'mysql2/promise';
import config from './config';

export default async function handler(req, res) {
  const connection = await mysql.createConnection(config);
  const [rows] = await connection.execute('SELECT * FROM entries ORDER BY submitted_at DESC');
  connection.release();

  res.json(rows);
}

