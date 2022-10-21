/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
// All controllers about USER
import { index, create, update } from '../controllers/user-controller.js';
const userRouter = express.Router();
// Read USER endpoint sending USER in req.body
userRouter.get('/users', index);
// Create USER endpoint
userRouter.post('/users', create);
// Update USER endpoint wiht ID
userRouter.put('/users/:id', update);
// Delete USER endpoint with endpoint
export default userRouter;
