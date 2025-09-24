const express = require('express');

// router
const assistantRouter = require('./routes/assistant/assistant.router');
const chatRouter = require('./routes/chat/chat.router');
const sessionRouter = require('./routes/session/session.router');

const app = express();
app.use(express.json());

app.use('/assistant', assistantRouter);
app.use('/chat', chatRouter);
app.use('/session', sessionRouter);

module.exports = app;