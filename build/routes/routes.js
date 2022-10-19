"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user-routes")); //Route referent to USERS collection CRUD
const routes = express_1.default.Router();
//Main route
routes.use('/users', user_routes_1.default);
exports.default = routes;
