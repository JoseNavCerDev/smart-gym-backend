import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: false
        },
        user: {
            type: String,
            required: true
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
            trim: false
        },
        cards: [],
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