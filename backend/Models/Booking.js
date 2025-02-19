// backend/Models/Booking.js
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tripId: {
    type: String,
    required: true
  },
  tripName: {
    type: String,
    required: true
  },
  tripLocation: {
    type: String,
    required: true
  },
  travelDate: {
    type: Date,
    required: true
  },
  persons: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  totalCost: {
    type: Number,
    required: true
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'confirmed'
  },
  tripImage: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);