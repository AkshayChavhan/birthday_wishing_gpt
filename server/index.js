import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './routes/userRoutes.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3001;


app.use("/api/v1/" , router);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error.message);
  }
};

startServer();
