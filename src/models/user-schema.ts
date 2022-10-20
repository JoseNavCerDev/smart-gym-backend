import mongoose from 'mongoose';

const { Schema } = mongoose;

const cardSchema = new Schema(
    {
        card_number: {
            type: String,
            required: true,
            trim: true
        },
        expiration_date:{
            type: Date,
            required: true,
            trim: true
        }
    }
);

const userSchema = new Schema(
    {
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
        email:{
            type: String,
            required: true,
            unique: true
        },
        status: {
            type: String,
            required: true,
            trim: false,
            enum: ['active', 'inactive', 'deleted'],
            default: "inactive"
        },
        balance:{
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
    }
);

const User = mongoose.model('user', userSchema);

export default User;