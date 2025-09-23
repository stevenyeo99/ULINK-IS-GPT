const mongoose = 'mongoose';

const ChatSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    assistantId: {
        type: String, 
        required: true
    },
    sessionId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Chat', ChatSchema);