/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Role from '../models/role-schema.js';
import { ddbbConnection } from '../config/ddbb.js';
import User from '../models/user-schema.js';
dotenv.config();
const rolesData = [
    { name: 'manager' },
    { name: 'clerk' },
    { name: 'trainer' },
    { name: 'customer' }
];
const getUserData = async (id_role) => {
    const salt = process.env.SALT
        && await bcrypt.genSalt(parseInt(process.env.SALT));
    const name = process.env.USER_NAME;
    const user = process.env.USER_USERNAME;
    const password = process.env.USER_PASSOWRD
        && salt
        && await bcrypt.hash(process.env.USER_PASSOWRD, salt);
    const email = process.env.USER_EMAIL;
    const status = process.env.USER_STATUS;
    if (!salt || !name || !user || !password || !email || !status)
        return undefined;
    return { name, user, password, email, status, id_role };
};
const seedAll = async () => {
    try {
        //conection call
        await ddbbConnection();
        // find roles in roles collection
        let roles = await Role.find();
        // insert the documents in roles collection if it's empty
        if (roles.length === 0)
            roles = await Role.insertMany(rolesData);
        // find users in users collection
        const users = await User.find();
        // insert the documents in users collection if it's empty
        if (users.length === 0) {
            const USER_DATA = await getUserData(roles[0]._id);
            if (!USER_DATA)
                throw new Error('Enviroment data is missing [seeder]');
            await User.create({ ...USER_DATA, id_role: roles[0]._id });
        }
        // close conection
        return await mongoose.connection.close();
    }
    catch (error) {
        console.log(error);
        return await mongoose.connection.close();
    }
};
console.log(seedAll());
