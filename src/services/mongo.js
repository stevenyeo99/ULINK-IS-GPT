const mongoose = require('mongoose');

const {
    MONGO_URL
} = require('../config');

mongoose.connection.once('open', () => {
    console.log('MongoDB Connection Ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect();
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}