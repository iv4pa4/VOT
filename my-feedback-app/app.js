const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Create a Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true
    }
  }
});

// Define a Feedback model
const Feedback = sequelize.define('Feedback', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// GET route for the feedback form
app.get('/feedback', (req, res) => {
  res.sendFile(__dirname + '/public/feedback.html');
});

// POST route to handle form submissions
app.post('/feedback', async (req, res) => {
  const { name, email, feedback } = req.body;

  try {
    // Create a new feedback record in the database
    await Feedback.create({ name, email, feedback });
    console.log('Feedback data stored successfully:', { name, email, feedback });
    res.send('Thank you for your feedback!');
  } catch (error) {
    console.error('Error storing feedback data:', error);
    res.status(500).send('An error occurred while storing feedback data.');
  }
});

// Sync the model with the database and start the server
sequelize.sync()
  .then(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });
