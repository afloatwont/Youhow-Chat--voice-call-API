import pkg from 'agora-access-token';
import logger from '../utils/logger.js';

const { RtcTokenBuilder, RtcRole } = pkg;

const appID = process.env.APP_ID;
const appCertificate = process.env.APP_CERTIFICATE;
const expireTime = 3600; 

export const generateToken = (req, res) => {
  const { channelName, uid } = req.body;
  const role = RtcRole.PUBLISHER; 

  if (!channelName || !uid) {
    logger.error('channelName and uid are required');
    return res.status(400).json({ error: 'channelName and uid are required' });
  }

  try {
    const token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, expireTime);
    logger.debug(`Token generated for channel: ${channelName}, uid: ${uid}`);
    res.json({ token: token });
  } catch (error) {
    logger.error(`Error generating token: ${error.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
};
