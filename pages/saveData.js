import mysql from 'mysql2/promise';
import config from './config';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {CompanyUEN, companyName, fullName, position , Email } = req.body;

    // Connect to the database and insert data
    const connection = await mysql.createConnection(config);
    await connection.execute('INSERT INTO entries (CompanyUEN, companyName, fullName, position , Email, submitted_at) VALUES (?, ?, ?, ?, ?, NOW())', [CompanyUEN, companyName, fullName, position , Email]);
    connection.release();

    // Redirect to the submitted entries page
    res.redirect('/submitted-entries');
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}