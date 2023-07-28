const express = require('express');
const { checkUser } = require('./middleware')
const { urls, port } = require('./service.json');
const app = express();
// const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/username', checkUser, (req, res)=>{
    const user = req.body.user;
    res.send(`Hello ${user}`);
})

app.listen(port, ()=> {
    console.log(`Server is running on ${urls+port}`)
});