const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ronsunbum', 
  database: 'SastraList'
});

db.connect((err) => {
  if (err) {
    console.error(' Database connection failed:', err.stack);
    return;
  }
  console.log(' Connected to MySQL Workbench database');
});

app.get('/', (req, res) => {
  db.query('SELECT * FROM listings', (err, results) => {
    if (err) {
      console.error('Error fetching listings:', err);
      res.status(500).send('Error fetching listings');
      return;
    }
    res.json(results);
  });
});

app.post('/post', (req, res) => {
  const { title, description, price, image, category } = req.body;
  const query = 'INSERT INTO listings ( title, description, price, image, category) VALUES ( ?, ?, ?, ?, ?)';
  
  db.query(query, [ title, description, price, image, category], (err, results) => {
    if (err) {
      console.error('Error inserting listing:', err);
      res.status(500).send('Error inserting listing');
      return;
    }
    res.json({ title, description, price, image, category });
    console.log('Listing inserted successfully:', {  title, description, price, image, category });
  });
});

// LOGIN
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM user WHERE email = ? AND password = ?';
  
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
      res.json(results[0]); // Send user details
      console.log('Login successful:', results[0]);
    } else {
      res.status(401).send('Invalid email or password');
      console.log('Invalid login attempt');
    }
  });
});


app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
  
  db.query(query, [name, email, password], (err, results) => {
    if (err) {
      console.error('Registration error:', err);
      return res.status(500).send('Error registering user');
    }

    res.json({ name, email });
    console.log('User registered:', { name, email });
  });
});