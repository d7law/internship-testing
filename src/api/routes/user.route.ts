import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = Router();

//Tạo api GET list user, get 1 user dựa vào id.
userRouter.get('/listUser', UserController.getAll);
userRouter.get('/listUser/:id', UserController.getUserById);
//Tạo api POST để tạo mới 1 user.
userRouter.post('/newUser', UserController.insertUser);
//Tạo api PUT để update thông tin user.
userRouter.put('/updateUser/:id', UserController.updateUser);

export default userRouter;
