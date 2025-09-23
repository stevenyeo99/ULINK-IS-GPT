const dotenv = require('dotenv');

dotenv.config();

const configs = {
    // Node JS ENV
    PORT: process.env.PORT || 3000,

    // OPEN AI ENV
    OPENAI_KEY: process.env.OPENAI_KEY || '',
    OPENAI_MODEL: process.env.OPENAI_MODEL || '',

    // MONGO DB ENV
    MONGO_URL: process.env.MONGO_URL || ''
};

module.exports = configs;