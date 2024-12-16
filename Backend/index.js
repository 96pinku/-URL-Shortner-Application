import express from 'express';
import cors from 'cors';
import routes from './Routes/formRoutes.js';
import dotenv from 'dotenv';
// import connectDB from './Config/connectDatabase.js';
import mongoose from 'mongoose';
// import { connectionDatabase } from './Config/connectDatabase.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({
    origin: 'https://url-shortner-application-c2d8.vercel.app', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, 
  }));

app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI)
        .then (res => 
            console.log("database connect")
        )
        .catch(error =>
            console.log(error)
        )

// Routes
app.use('/api', routes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    // connectionDatabase();
});
