import bcrypt from 'bcrypt';
import User from '../models/user-schema.js';
import { successResponse } from '../helpers/response.js';
// FUNCTION to read ALL USERS
export async function index(_req, res, next) {
    try {
        const users = await User.find().select('-password');
        return res.status(200).json(successResponse(users));
    }
    catch (error) {
        return next(error);
    }
}
// Function to create NEW USER
export async function create(req, res, next) {
    try {
        // Destructure request body
        const { name, user, password, email, id_role } = req.body;
        // Two variables for encrypt generation
        let salt, passH;
        // Check if SALT exists
        if (process.env.SALT !== undefined) {
            // Encrypt password previous to save
            salt = await bcrypt.genSalt(parseInt(process.env.SALT));
            passH = await bcrypt.hash(password, salt);
            // Interface application
            const newUser = {
                name,
                user,
                password: passH,
                email,
                id_role
            };
            // Creation and save to the new user
            const newUserCreation = await User.create(newUser);
            // Response succesfull operation
            return res.status(200).json(successResponse(newUserCreation));
            // Response wrong operation to problems with SALT
        }
        else {
            return res.status(400).json({
                errors: true,
                msg: 'Salt is mising...',
                data: null
            });
        }
    }
    catch (error) {
        return next(error);
    }
}
// FUNCTION to show USER by id
export async function show(req, res, next) {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(successResponse(user));
    }
    catch (error) {
        return next(error);
    }
}
// FUNCTION to update USER
export async function update(req, res, next) {
    try {
        // Destructure id param
        const { id } = req.params;
        const { name, user, email } = req.body;
        const userToUpdated = await User.findByIdAndUpdate(id, {
            name,
            user,
            email
        }, { new: true }).select('-password');
        return res.status(200).json(successResponse(userToUpdated));
    }
    catch (error) {
        return next(error);
    }
}
// FUNCTION to delete USER
export async function destroy(req, res, next) {
    try {
        // Destructure id param
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, {
            status: 'deleted'
        }, { new: true }).select('-password');
        return res.status(200).json(successResponse(user));
    }
    catch (error) {
        return next(error);
    }
}
