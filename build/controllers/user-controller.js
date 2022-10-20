"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.getUserController = exports.createUserController = void 0;
const user_schema_1 = __importDefault(require("../models/user-schema"));
//Function to create NEW USER
function createUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = new user_schema_1.default(req.body);
            const userSaved = yield newUser.save();
            res.status(200).send(userSaved._id);
        }
        catch (error) {
            res.status(400).send('something went wrong...');
        }
    });
}
exports.createUserController = createUserController;
//FUNCTION to read USER
function getUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user } = req.body;
            const userFromDDBB = yield user_schema_1.default.findOne({ user });
            res.send(userFromDDBB);
        }
        catch (error) {
            res.status(400).send('something went wrong...');
        }
    });
}
exports.getUserController = getUserController;
//FUNCTION to update USER
function updateUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const userFromDDBB = yield user_schema_1.default.findById(id);
            res.send(userFromDDBB);
        }
        catch (error) {
            res.status(400).send('something went wrong...');
        }
    });
}
exports.updateUserController = updateUserController;
//FUNCTION to delete USER
function deleteUserController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /* const { id } = req.params;
            const userFromDDBB = await User.findById(id);
            userFromDDBB?.delete();
            res.send(`User ${id} was deleted successfully...`); */
            res.send('<h1>Hello world madafacas...</h1>');
        }
        catch (error) {
            res.status(400).send('something went wrong...');
        }
    });
}
exports.deleteUserController = deleteUserController;
