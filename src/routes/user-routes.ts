import express from 'express';

//All controllers about USER 
import {
    createUserController, 
    getUserController, 
    updateUserController, 
    deleteUserController
}  from '../controllers/user-controller';

const userRouter = express.Router();

//Create USER endpoint
userRouter.post('/create', createUserController);

//Read USER endpoint sending email in req.body
userRouter.get('/get-user', getUserController);

//Update USER endpoint wiht ID
userRouter.put('/update/:id', updateUserController);

//Delete USER endpoint with endpoint
userRouter.delete('/delete/:id', deleteUserController);



export default userRouter;