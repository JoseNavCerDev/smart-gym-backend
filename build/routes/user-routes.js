/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
// All controllers about USER
import { index, create, show, update, destroy } from '../controllers/user-controller.js';
const userRouter = express.Router();
// Read USER endpoint sending USER in req.body
userRouter.get('/', index);
// Create USER endpoint
userRouter.post('/', create);
// Show single user
userRouter.get('/:id', show);
// Update USER endpoint wiht ID
userRouter.put('/:id', update);
// Delete USER endpoint with endpoint
userRouter.delete('/:id', destroy);
export default userRouter;
