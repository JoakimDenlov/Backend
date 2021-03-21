import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './src/middleware/MiddleWare.js';
import Configuration from './config/Configuration.js';
import CommentRoutes from  './src/routes/comment.routes.js';
import TimelineRoutes from './src/routes/Timeline.routes.js';
import path from 'path'


dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan('common'));



CommentRoutes.routes(app);
TimelineRoutes.routes(app);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

Configuration.connectToDatabase();
Configuration.connectToPort(app);