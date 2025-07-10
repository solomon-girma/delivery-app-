require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
// ... rest of your code
const bodyParser = require('body-parser');
const db = require('./config/db'); 
const path = require('path');

 

const app = express();
const PORT = 5000;

// Static serving of images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// ✅ Use the route for all user-related endpoints
app.use('/api/users', userRoutes);

// Test route (optional)
app.get('/', (req, res) => {
  res.send('API is running...');
});

const vendorRoutes = require('./routes/vendors');
app.use('/vendors', vendorRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

