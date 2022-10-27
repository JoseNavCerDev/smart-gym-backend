import mongoose from 'mongoose';
const { Schema } = mongoose;
const excersicetSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: false
    },
    pictures: {
        type: [String]
    }
}, { timestamps: true });
const Exersice = mongoose.model('excersice', excersicetSchema);
export default Exersice;
