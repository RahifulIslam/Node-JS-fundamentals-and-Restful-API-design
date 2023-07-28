const express = require('express');
const app = express();
const db = require('./server')

const { urls, port} = require('./service.json');

const studentRouter = require('./routes/studentRouter');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/student', studentRouter)

app.listen(port, ()=>{
    console.log(`Server running on ${urls+port}`)
})


