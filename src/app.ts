import 'reflect-metadata';
import express, { Request, Response, Application } from 'express';
import { connectDatabase } from './config/database.config';
import router from './api/routes/index.route';
import { loader } from './api/middlewares/loader.middleware';
import { errorHandler } from './api/middlewares/errorHandler.middleware';
require('dotenv').config();

const app: Application = express();
const port = process.env.PORT;

connectDatabase()
    .then(() => {
        //load middleware
        (async () => await loader(app))();
        //route init
        router(app);
        //error catch
        errorHandler(app);
        app.listen(port, () => {
            console.log(`Server is running at port: ${port}`);
        });
    })
    .catch((err) => console.log('Connection is fail', err));
