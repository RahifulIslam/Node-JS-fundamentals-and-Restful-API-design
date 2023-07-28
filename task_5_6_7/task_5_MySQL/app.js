const express = require('express');
const app = express();
const db = require('./server');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
// var rfs = require('rotating-file-stream')

const { urls, port} = require('./service.json');

const studentRouter = require('./routes/studentRouter');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

app.use('/student', studentRouter)

app.listen(port, ()=>{
    console.log(`Server running on ${urls+port}`)
})


