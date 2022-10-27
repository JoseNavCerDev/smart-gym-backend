import mongoose from 'mongoose';
const { Schema } = mongoose;
const classesSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    availability: {
        type: Number,
        required: true
    },
    id_trainner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    students: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
        default: []
    }
}, { timestamps: true });
const Class = mongoose.model('class', classesSchema);
export default Class;
