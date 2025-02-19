// backend/Controllers/BookingController.js
const Booking = require('../Models/Booking');

// Create new booking
exports.createBooking = async (req, res) => {
  try {
    const { 
      tripId, 
      tripName, 
      tripLocation, 
      travelDate, 
      persons, 
      totalCost, 
      tripImage 
    } = req.body;

    // Get user ID from authenticated request
    const userId = req.user.id;

    const newBooking = new Booking({
      userId,
      tripId,
      tripName,
      tripLocation,
      travelDate,
      persons,
      totalCost,
      tripImage
    });

    const savedBooking = await newBooking.save();
    res.status(201).json({
      success: true,
      data: savedBooking
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all bookings for a user
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .sort({ bookingDate: -1 }); // Sort by booking date, newest first
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get single booking
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    // Check if the booking belongs to the authenticated user
    if (booking.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to access this booking'
      });
    }

    res.status(200).json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update booking status or delete booking
exports.updateBookingStatus = async (req, res) => {
  try {
    const { status, action } = req.body; // Check for status update or delete action

    const booking = await Booking.findById(req.params.id);
    
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    // Ensure the user can only modify their own booking
    if (booking.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to modify this booking'
      });
    }

    // Handle delete action
    if (action === "delete") {
      await booking.deleteOne(); // Delete booking
      return res.status(200).json({
        success: true,
        message: "Booking deleted successfully"
      });
    }

    // Handle status update
    if (status) {
      booking.status = status;
      await booking.save();
      return res.status(200).json({
        success: true,
        data: booking
      });
    }

    return res.status(400).json({
      success: false,
      error: "Invalid request. Provide 'status' or 'action: delete'."
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};
