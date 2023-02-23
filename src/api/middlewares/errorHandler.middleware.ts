import { Application, NextFunction, Request, Response } from 'express';
import createHttpError, { CreateHttpError, HttpError } from 'http-errors';
export async function errorHandler(app: Application) {
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(createHttpError(404, 'not found'));
    });
    app.use(
        (err: HttpError, req: Request, res: Response, next: NextFunction) => {
            res.status(err.status).json(err);
        }
    );
}
