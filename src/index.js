import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
//middelwares
app.use(cors({
    origin: true,
    credentials: true,
    defaultErrorHandler: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json()); // Example limit of 10MB
app.use(bodyParser.json())

app.use(helmet({ crossOriginResourcePolicy: false, }));
app.use(morgan("dev"));
const port = process.env.DEV_PORT || 5555;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});