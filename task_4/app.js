const express = require('express');
const app = express();

const { urls, port} = require('./service.json');

const userRouter = require('./routes/userRouter');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter)

app.listen(port, ()=>{
    console.log(`Server running on ${urls+port}`)
})

