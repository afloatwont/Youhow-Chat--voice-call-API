import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import logger from './utils/logger.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  logger.debug(`${req.method} ${req.url}`);
  next();
});

app.use('/', routes);

app.listen(port, () => {
  logger.debug(`Token server listening at http://localhost:${port}`);
});
