import { createConnection } from 'typeorm';
import { User } from '../api/entities/User';

export const connectDatabase = async () => {
    const connection = await createConnection({
        type: 'mysql',
        host: 'sql12.freesqldatabase.com',
        port: 3306,
        username: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        database: 'sql12600524',
        entities: [User],
        synchronize: true,
        logging: false,
    });
    console.log(`Connected to database ${connection.options.database}`);
};
