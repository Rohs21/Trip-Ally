const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const AuthRouter = require('./Routes/AuthRouter');
const BookingRouter = require('./Routes/BookingRouter');
const { protect } = require('./Middlewares/AuthValidation');

require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 3000;

app.get('/ping',(req,res)=>{
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(cors())
app.use('/auth', AuthRouter)
app.use('/api/bookings',protect,BookingRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})