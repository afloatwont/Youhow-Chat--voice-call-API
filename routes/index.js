import { Router } from 'express';
const router = Router();
import { generateToken } from '../controllers/tokenController.js';
import authenticateJWT from '../middlewares/authenticateJWT.js';
import limiter from '../middlewares/rateLimiter.js';

router.post('/token', authenticateJWT, limiter, generateToken);

router.get('/', (req, res) => {
  res.send('<h1>Welcome to Youhow Chat</h1>');
});

export default router;