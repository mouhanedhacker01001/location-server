const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let lastLocation = null;

app.post('/location', (req, res) => {
  lastLocation = req.body;
  console.log('📍 موقع جديد:', lastLocation);
  res.send({ status: 'تم الاستقبال' });
});

app.get('/location', (req, res) => {
  if (lastLocation) {
    res.send(lastLocation);
  } else {
    res.send({ error: 'لا يوجد موقع بعد' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 السيرفر شغال على http://localhost:${PORT}`);
});
