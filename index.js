const express = require('express');
const cors = require('cors');

const app = express();

// تفعيل CORS للسماح بالطلبات من أي مصدر
app.use(cors());
app.use(express.json());

// استخدام البورت من environment variable
const PORT = process.env.PORT || 3000;

// Route رئيسي للفحص
app.get('/', (req, res) => {
  res.send('🚀 Server is Live. Use /location for POST/GET.');
});

// متغير لتخزين آخر موقع
let lastLocation = null;

// استقبال الموقع
app.post('/location', (req, res) => {
  lastLocation = req.body; // { latitude, longitude }
  console.log('📍 New location received:', lastLocation);
  res.json({ status: 'ok' });
});

// إرجاع آخر موقع
app.get('/location', (req, res) => {
  if (lastLocation) return res.json(lastLocation);
  res.json({ error: 'no location yet' });
});

// تشغيل السيرفر على البورت الصحيح
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
