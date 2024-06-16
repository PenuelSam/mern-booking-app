
import express, {Request, Response} from 'express';
import cors from 'cors';
import 'dotenv/config.js'
import mongoose from 'mongoose';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import cookieParser from 'cookie-parser';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary'
import myHotelRoutes from './routes/my-hotels'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

mongoose.connect(process.env.CONN_STR as string)
.then((conn) =>{
    //console.log(conn) 
    console.log('connected to DB')
})
.catch((err) => {
    console.log(err)
    console.log('some error has occured')
});


const app = express();
app.use(cookieParser());

app.use(express.json())

app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/api/auth", authRoutes);
app.use('/api/users', userRoutes);
app.use("/api/my-hotels", myHotelRoutes);

app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
})

app.listen(7000, () => {
    console.log("server is running on localhost:7000");
});
