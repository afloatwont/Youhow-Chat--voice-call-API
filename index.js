import express from 'express';
import { config } from 'dotenv';
import router from './routes/index.js';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
config();

const app = express();
const port = 3000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Token server listening at http://localhost:${port}`);
});
