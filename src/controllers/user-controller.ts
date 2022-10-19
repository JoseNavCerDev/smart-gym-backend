import { Request, Response } from "express";
import User from '../models/user-schema';

//Function to create NEW USER
export async function createUserController(req: Request,res: Response) {
    try {
        const newUser = new User(req.body);
        const userSaved = await newUser.save();  
        res.status(200).send(userSaved._id);      
    } catch (error) {
        res.status(400).send('something went wrong...');
    }    
}

//FUNCTION to read USER
export async function getUserController(req: Request, res: Response) {
    try {
        const { email } = req.body;
        const userFromDDBB = await User.findOne({email});
        res.send(userFromDDBB);
    } catch (error) {
        res.status(400).send('something went wrong...');
    }
}

//FUNCTION to update USER
export async function updateUserController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const userFromDDBB = await User.findById(id);
        res.send(userFromDDBB);
    } catch (error) {
        res.status(400).send('something went wrong...');
    }
}

//FUNCTION to delete USER
export async function deleteUserController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const userFromDDBB = await User.findById(id);
        userFromDDBB?.delete();
        res.send(`User ${id} was deleted successfully...`);
    } catch (error) {
        res.status(400).send('something went wrong...');
    }
}

