// server.js
const express = require('express');
const vision = require('@google-cloud/vision');
const cors = require('cors');

const app = express();
app.use(cors());

const client = new vision.ImageAnnotatorClient();

app.post('/api/analyze-image', async (req, res) => {
  // 여기에서 이미지 데이터를 처리하고 Google Vision API를 호출합니다.
  const [result] = await client.labelDetection('./resources/wakeupcat.jpg');
  const labels = result.labelAnnotations;
  res.json({ labels: labels.map(label => label.description) });
});

app.listen(5173, () => {
  console.log('Server is running on http://localhost:5173/');
});