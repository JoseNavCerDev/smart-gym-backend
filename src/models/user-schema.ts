import mongoose from 'mongoose'

const { Schema } = mongoose

const cardSchema = new Schema({
  name_owner: {
    type: String,
    required: true,
    trim: true
  },
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
})

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Please fill a valid email address']
  },
  status: {
    type: String,
    required: true,
    trim: false,
    enum: ['active', 'inactive', 'expired', 'deleted'],
    default: 'inactive'
  },
  cards: [cardSchema],
  id_role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Roles',
    required: true
  },
  classes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'classes' }],
    default: []
  }
}, { timestamps: true })

const User = mongoose.model('user', userSchema)

export default User
