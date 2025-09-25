// backend/index.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Use your Clever Cloud MySQL credentials here
const db = mysql.createConnection({
  host: "your-mysql-host",        // Provided by Clever Cloud
  user: "your-mysql-username",    // Provided by Clever Cloud
  password: "your-mysql-password",// Provided by Clever Cloud
  database: "your-db-name"        // Provided by Clever Cloud
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Example endpoint
app.get('/api/test', (req, res) => {
  db.query('SELECT NOW() as now', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
