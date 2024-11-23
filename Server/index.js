import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome to GeeksforGeeks');
    });

app.listen(PORT,() => {
    console.log(`Server is running on PORT: ${PORT}`)
});

app.use('/api/user', userRoute)
app.use('/api/residency', residencyRoute)

//mongodb+srv://vicky:123@cluster0.gvhds.mongodb.net/
//mongodb+srv://vicky:123@cluster0.gvhds.mongodb.net/RealEstate?retryWrites=true&w=majority&appName=Cluster0