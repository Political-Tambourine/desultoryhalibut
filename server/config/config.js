const path = require('path');

const env = process.env.NODE_ENV || 'development';
const rootPath = path.join(__dirname, '../..');

const config = {
  development: {
    rootPath: rootPath,
    port: process.env.PORT || '3000',
    secret: process.env.SECRET || 'all sphynxes are unique',
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/sidestreet',
    logLevel: process.env.LOG_LEVEL || 'dev',
    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY || 'bf13YSPA4moQyU4WXICjuHwAV',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || 'Q2ZC3E75rkWPkQP0BpZnsEQB7a7TWw2H6EzGH9bLDmZ0Jpz3IQ',
      access_token: process.env.TWITTER_ACCESS_TOKEN || '759496215406837760-iXMhX7Az6jdGblEBLvw8rOLougHI1Zw',
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'LK4kCnszUGFiSuzP5we2uZceoOauRvUSiCDfwwNrFvZ72'
    }
  },
  production: {
    rootPath: rootPath,
    port: process.env.PORT || '80',
    secret: process.env.SECRET || 'all sphynxes are unique',
    db: process.env.DATABASE_URL || 'postgres://postgres@localhost/sidestreet',
    logLevel: process.env.LOG_LEVEL || 'tiny',
    twitter: {
      consumer_key: process.env.TWITTER_CONSUMER_KEY || 'QVTSH5DZGllrzCOK6ZzJMdc7c',
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET || '1T5fG8Spwnd6Owry9bdusvQP6ePo3bi4nHBda1r53kZl6vKMc8',
      access_token: process.env.TWITTER_ACCESS_TOKEN || '3327635388-191K4BPqdz4OdNrEvgZCojJMxXhqRUGXH3YJu0X',
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET || 'gXN4stJjlcArq194B4LaSQL2vxlQlV5k6qIRtZ2HB4L8M',
    }
  }
};

module.exports = config[env];
