const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

dotenv.config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  credentials: true, // This is important if you're handling cookies or authorization headers
}));

// Middleware for parsing JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to MongoDB (update your MongoDB URI in the .env file)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const authRoutes = require('./routes/authRoutes');

// Use authentication routes
app.use('/api/auth', authRoutes);


