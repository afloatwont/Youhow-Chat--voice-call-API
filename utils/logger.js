const getTimestamp = () => {
  return new Date().toISOString();
};

const logger = {
  debug: (message) => {
    console.log(`[DEBUG] [${getTimestamp()}] ${message}`);
  },
  error: (message) => {
    console.error(`[ERROR] [${getTimestamp()}] ${message}`);
  }
};

export default logger;