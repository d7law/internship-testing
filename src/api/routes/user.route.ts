import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { graphqlHTTP } from 'express-graphql';
import { schemagQL } from '../graphql_v1/schema_gql/user.schema';

const userRouter = Router();

//Tạo api GET list user, get 1 user dựa vào id.
userRouter.get('/listUser', UserController.getAll);
userRouter.get('/listUser/:id', UserController.getUserById);
//Tạo api POST để tạo mới 1 user.
userRouter.post('/newUser', UserController.insertUser);
//Tạo api PUT để update thông tin user.
userRouter.put('/updateUser/:id', UserController.updateUser);

userRouter.use(
    '/graphql',
    graphqlHTTP({
        schema: schemagQL,
    })
);

export default userRouter;
