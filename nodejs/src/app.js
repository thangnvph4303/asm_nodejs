import express from 'express'
import  mongoose  from 'mongoose';
import cors from 'cors'
import CategoryRouter from './router/categorys'
import productRouter from './router/products'
import authRouter from './router/auth'


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", CategoryRouter)
app.use("/api", productRouter);
app.use("/api", authRouter)


mongoose.connect('mongodb://127.0.0.1:27017/demo-nodejs')

export const viteNodeApp = app;