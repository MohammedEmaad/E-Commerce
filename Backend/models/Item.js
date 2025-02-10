const mongoose = require('mongoose');

let isConnected = false;

const connectToMongoDB = async () => {
  if (!isConnected) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      throw error;
    }
  }
};

connectToMongoDB();

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: String,
  image: String,
  image2: String,
  image3: String,
  image4: String,
});

module.exports = mongoose.models.Item || mongoose.model('Item', itemSchema);
