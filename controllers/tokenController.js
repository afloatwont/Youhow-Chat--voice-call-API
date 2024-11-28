import pkg from 'agora-access-token';
const { RtcTokenBuilder, RtcRole } = pkg;

const appID = process.env.APP_ID;
const appCertificate = process.env.APP_CERTIFICATE;
const expireTime = 3600; 

export const generateToken = (req, res) => {
  const { channelName, uid } = req.body;
  const role = RtcRole.PUBLISHER; 

  if (!channelName || !uid) {
    return res.status(400).json({ error: 'channelName and uid are required' });
  }

  const token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, expireTime);
  res.json({ token: token });
};
