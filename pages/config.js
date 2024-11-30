// config.js
// DATABASE_HOST=LAPTOP-NKEBRMEN\SQLEXPRESS
// DATABASE_USER=LAPTOP-NKEBRMEN\PC
// DATABASE_PASSWORD=your_database_password
// DATABASE_NAME=smshealthDB

module.exports = {
    host: process.env.DATABASE_HOST || 'LAPTOP-NKEBRMEN\SQLEXPRESS',
    user: process.env.DATABASE_USER || 'LAPTOP-NKEBRMEN\PC',
    password: process.env.DATABASE_PASSWORD || 'my_secret_password',
    database: process.env.DATABASE_NAME || 'smshealthDB'
  };


  // LAPTOP-NKEBRMEN\SQLEXPRESS - server name 

  // smshealthDB - db name
  //
  // database: 'smshealthDB',