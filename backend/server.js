const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock product data
const products = [
  { id: 1, name: "Wireless Headphones", price: 120, image: "wireless-headphones.jpeg" },
  { id: 2, name: "Smartwatch", price: 80, image: "smartwatch.jpeg" },
  { id: 3, name: "Gaming Mouse", price: 40, image: "gaming-mouse.jpeg" },
  { id: 4, name: "Bluetooth Speaker", price: 60, image: "bluetooth-speaker.jpeg" }
];

// Serve static images if needed (optional since frontend has them)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/', (req, res) => {
  res.send('Ecommerce API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
