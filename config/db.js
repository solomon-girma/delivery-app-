const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // Change to your DB username if different
  password: '2107',         // Add your DB password if set
  database: 'deliveryapp' // Name of the database you created
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected!');
});

module.exports = connection;
