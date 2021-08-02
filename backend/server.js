import express from 'express'
import cors from 'cors'
import connectDB from './database/db.js';
import dotenv from 'dotenv'
import color from 'colors'
import formRoutes from './routes/formRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

app.get('/', (req, res)=> {
    res.send('server is running')
})
app.use('/api/form', formRoutes)
app.use('/api/users', userRoutes)
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000
app.listen(port, console.log('server is running ...'.green.bold))