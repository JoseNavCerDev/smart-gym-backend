"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const cardSchema = new Schema({
    card_number: {
        type: String,
        required: true,
        trim: true
    },
    expiration_date: {
        type: Date,
        required: true,
        trim: true
    }
});
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: false
    },
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true,
        trim: false,
        enum: ['Active', 'Inactive'],
        default: "Inactive"
    },
    balance: {
        type: Number,
        default: 0
    },
    cards: cardSchema,
    id_role: {
        type: String,
        required: true,
        trim: false
    },
    classes: []
});
const User = mongoose_1.default.model('user', userSchema);
exports.default = User;
