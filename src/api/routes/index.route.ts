import { Application } from 'express';
import userRouter from './user.route';

export default function router(app: Application) {
    app.use('/api/user', userRouter);
}
