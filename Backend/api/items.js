const Item = require('../models/Item'); // Import the model

module.exports = async (req, res) => {
  try {
    // Fetch items from the database
    const items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res
      .status(500)
      .json({ message: 'Error fetching items', error: error.message });
  }
};
