"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//All controllers about USER 
const user_controller_1 = require("../controllers/user-controller");
const userRouter = express_1.default.Router();
//Create USER endpoint
userRouter.post('/create', user_controller_1.createUserController);
//Read USER endpoint sending USER in req.body
userRouter.get('/get-user', user_controller_1.getUserController);
//Update USER endpoint wiht ID
userRouter.put('/update/:id', user_controller_1.updateUserController);
//Delete USER endpoint with endpoint
userRouter.get('/delete/:id', user_controller_1.deleteUserController);
exports.default = userRouter;
