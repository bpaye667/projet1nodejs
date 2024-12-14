const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./dbb');
const authRoutes = require('./authen');
const userRoutes = require('./usercontroller');
const authMiddleware = require('./authmiddleware');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Routes
app.use('/auth', authRoutes);
app.use('/users', authMiddleware, userRoutes);

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
