import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('DB connected successfully')
})
.catch((err) => {
    console.error(err);
})

const app = express();

app.use('/api/user', userRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000!")
})