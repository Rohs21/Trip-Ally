const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const AuthRouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./Models/db');



const PORT = process.env.PORT || 3000;

app.get('/ping',(req,res)=>{
    res.send('PONG');
})


app.use(bodyParser.json());
app.use(cors())
app.use('/auth',AuthRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})


