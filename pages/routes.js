// const express = require('express');
// const router = express.Router();
// const db = require('./server.js');

// // Get all users
// router.get('/users', (req, res) => {
//   db.query('SELECT * FROM users', (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Database error' });
//       return;
//     }
//     res.status(200).json(results);
//   });
// });

// // Add a new user
// router.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
//   db.query(sql, [name, email], (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Database error' });
//       return;
//     }
//     res.status(201).json({ message: 'User added', userId: results.insertId });
//   });
// });

// module.exports = router;
