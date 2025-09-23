const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chatId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Chat' 
    },
    role: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timestamp: { 
        type: Date, default: Date.now 
    }
});

export default mongoose.model('Message', MessageSchema);