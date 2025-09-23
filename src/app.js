const express = require('express');

// router
const chatRouter = require('./routes/chat/chat.router');

const app = express();
app.use(express.json());

app.use('/chat', chatRouter);

module.exports = app;