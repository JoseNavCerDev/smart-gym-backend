import mongoose from 'mongoose'

const { Schema } = mongoose

const paymentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  type: {
    type: String,
    required: true,
    trim: false,
    enum: ['cash', 'card'],
    default: 'card'
  },
  amount: {
    type: Number,
    required: true
  },
  reference: {
    type: String,
    trim: true
  },
  id_customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  }
}, { timestamps: true }
)

const Payment = mongoose.model('payment', paymentSchema)

export default Payment
