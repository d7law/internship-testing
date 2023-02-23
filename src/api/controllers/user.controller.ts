import e, { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import createHttpError from 'http-errors';

export class UserController {
    static getAll = async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);

        try {
            const users = await userRepository.find();
            if (typeof users != undefined && users.length > 0) {
                res.status(200).json({ message: 'get success', users });
            } else {
                next(createHttpError(404, 'No users at all!'));
            }
        } catch (error) {
            //console.log(error);
            next(createHttpError.InternalServerError('This is a error'));
        }
    };

    static getUserById = async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);

        var id: number = +req.params.id;
        try {
            const user = await userRepository.findBy({ id: id });
            if (typeof user != undefined && user.length > 0) {
                return res.status(200).json({ message: 'get success', user });
            } else {
                next(createHttpError(404, 'This user is not exist'));
            }
        } catch (error) {
            next(createHttpError.InternalServerError('This is a error'));
        }
    };

    //need some validation
    static insertUser = async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);

        const newUser = new User();
        Object.assign(newUser, req.body);
        await userRepository
            .save(newUser)
            .then(() => {
                return res.status(200).json({ message: 'insert success', newUser });
            })
            .catch((error) =>
                next(createHttpError.InternalServerError('This is a error'))
            );
    };

    static updateUser = async (req: Request, res: Response, next: NextFunction) => {
        const userRepository = getRepository(User);

        var id: number = +req.params.id;
        var user = await userRepository.findBy({ id: id });

        if (typeof user == undefined || user.length == 0 || user == null) {
            return next(createHttpError(404, 'This user is not exist'));
        } else {
            var updatedUser: User = new User();
            Object.assign(updatedUser, req.body);
            await userRepository
                .update({ id: id }, updatedUser)
                .then(() => {
                    console.log(user, updatedUser);
                    return res
                        .status(200)
                        .json({ message: 'update success', updatedUser });
                })
                .catch((error) =>
                    next(createHttpError.InternalServerError('This is a error'))
                );
        }
    };
}
