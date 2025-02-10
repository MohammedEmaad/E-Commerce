require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  image: String,
  image2: String,
  image3: String,
  image4: String,
});

const Item = mongoose.model('Items', itemSchema, 'items');

app.get('/items', async (req, res) => {
  try {
    console.log('Fetching items...');
    const items = await Item.find({});
    console.log('Found items:', items);
    if (items.length === 0) {
      console.log('No items found in the collection.');
    }
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res
      .status(500)
      .json({ message: 'Error fetching items', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
