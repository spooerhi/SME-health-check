// const express = require('express');
// const mysql = require('mysql2');
// const multer = require('multer');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// // Set up Express app
// const app = express();
// const port = 5000;

// // CORS to allow React app to communicate with backend
// app.use(cors());

// // Parse incoming request bodies as JSON
// app.use(bodyParser.json());

// // Set up MySQL database connection
// const db = mysql.createConnection({
//   host: 'localhost', // Your MySQL host
//   user: 'root', // Your MySQL username
//   password: '', // Your MySQL password
//   database: 'credilinq' // Your database name
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL database!');
// });

// // Set up Multer for file uploads (e.g., bank statements)
// const upload = multer({ dest: 'uploads/' });

// // API endpoint to handle form data and file upload
// app.post('/submit-form', upload.array('documents', 6), (req, res) => {
//   const { fullName, position, email, phoneNumber } = req.body;
//   const documents = req.files;

//   // Save form data into MySQL
//   const query = `INSERT INTO submissions (full_name, position, email, phone_number) VALUES (?, ?, ?, ?)`;
//   db.query(query, [fullName, position, email, phoneNumber], (err, result) => {
//     if (err) {
//       return res.status(500).json({ message: 'Error inserting data into database', error: err });
//     }

//     // Save file data (file paths or file details) into the database
//     documents.forEach((file) => {
//       const fileQuery = `INSERT INTO uploaded_files (submission_id, file_path) VALUES (?, ?)`;
//       db.query(fileQuery, [result.insertId, file.path], (err) => {
//         if (err) {
//           return res.status(500).json({ message: 'Error saving file data', error: err });
//         }
//       });
//     });

//     res.status(200).json({ message: 'Form submitted successfully!', submissionId: result.insertId });
//   });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// const mysql = require('mysql');

// // Create a connection pool
// const db = mysql.createPool({
//   host: 'localhost',     // Replace with your database host
//   user: 'LAPTOP-NKEBRMEN\PC',          // Replace with your MySQL username
//   password: 'tiger',  // Replace with your MySQL password
//   database: 'smshealthDB' // Replace with your database name
// });

// // Check database connection
// db.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL database!');
//   connection.release();
// });

// // Export the connection for use in routes
// module.exports = db;
