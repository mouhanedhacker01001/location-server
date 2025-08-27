const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// صفحة فحص سريعة
app.get('/', (req, res) => {
  res.send('🚀 Server is Live. Use /location for GET/POST.');
});

let lastLocation = null;

// استلام الموقع
app.post('/location', (req, res) => {
  lastLocation = req.body; // { latitude, longitude }
  console.log('📍 New location:', lastLocation);
  res.json({ status: 'ok' });
});

// إرجاع آخر موقع
app.get('/location', (req, res) => {
  if (lastLocation) return res.json(lastLocation);
  res.json({ error: 'no location yet' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
