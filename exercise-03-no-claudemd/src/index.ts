import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

app.get('/uploads/:filename', (req, res) => {
  const filePath = path.join(__dirname, '../uploads', req.params.filename);
  res.sendFile(filePath);
});

app.listen(3000, () => console.log('Server started'));
