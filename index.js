// index.js
import dotenv from 'dotenv';
import connectDb from './config/dbConnection.js';
import { server } from './app.js'; // Import the server instance from app.js

dotenv.config(); // Load environment variables from .env file

// Connect to MongoDB
connectDb()

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
