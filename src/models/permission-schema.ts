import mongoose from 'mongoose'

const { Schema } = mongoose

export const permissionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamps: true })

const Permission = mongoose.model('Permission', permissionSchema)

export default Permission
