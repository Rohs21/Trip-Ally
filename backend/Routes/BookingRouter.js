// backend/Routes/BookingRouter.js
const express = require('express');
const router = express.Router();
const { 
  createBooking, 
  getUserBookings, 
  getBooking, 
  updateBookingStatus 
} = require('../Controllers/BookingController');
const { protect } = require('../Middlewares/AuthValidation');

// All routes require authentication
router.use(protect);

// Create booking and get all user bookings
router.route('/')
  .post(createBooking)
  .get(getUserBookings);

// Get single booking and update booking status
router.route('/:id')
  .get(getBooking)
  .patch(updateBookingStatus);

module.exports = router;