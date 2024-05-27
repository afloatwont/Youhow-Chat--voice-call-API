const express = require('express');
const { RtcTokenBuilder, RtcRole } = require('agora-access-token');
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

dotenv.config();


const app = express();
const port = 3000;

const appID = process.env.APP_ID;
const appCertificate = process.env.APP_CERTIFICATE;
const expireTime = 3600; // Token expiry time in seconds

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to generate token
app.post('/token', (req, res) => {
  console.log('Received request body:', req.body);
  
  const { channelName, uid } = req.body;
  const role = RtcRole.PUBLISHER; // or any other role based on your requirement

  if (!channelName || !uid) {
    return res.status(400).json({ error: 'channelName and uid are required' });
  }

  const token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, expireTime);
  res.json({ token: token });
});

// Endpoint to serve a welcome message
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Youhow Chat</h1>');
});

app.listen(port, () => {
  console.log(`Token server listening at http://localhost:${port}`);
});
