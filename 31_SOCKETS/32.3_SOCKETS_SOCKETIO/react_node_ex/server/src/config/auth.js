module.exports = {
  jwt: {
    secret: process.env.APP_SECRET || 'hey',
    expiresIn: '1d',
  },
};
