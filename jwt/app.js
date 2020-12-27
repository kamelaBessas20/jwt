
require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const userRouter = require('./routes/user');

app.use('/users', userRouter);

app.listen( port, ()=>{
  console.log('Server running');
})

module.exports = app;

