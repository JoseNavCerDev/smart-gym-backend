import mongoose from 'mongoose';
import { permissionSchema } from './permission-schema.js';
const { Schema } = mongoose;
const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    permission: [permissionSchema]
}, { timestamps: true });
const Role = mongoose.model('role', roleSchema);
export default Role;
