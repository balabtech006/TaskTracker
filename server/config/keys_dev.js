module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/timeSheet',
  secretOrKey: process.env.SECRET_OR_KEY || '6t8669869689VJVVJ',
  cloudName: process.env.CLOUD_NAME,
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
};
