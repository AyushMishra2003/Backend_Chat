import mongoose from 'mongoose';

// Define the schema for a Message
const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    trim: true,
  },
  recipient: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

// Create the model from the schema
const Message = mongoose.model('Message', messageSchema);

export default Message;
