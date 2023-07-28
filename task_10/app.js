const express = require('express');
const app = express();
const db = require('./server')
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
var rfs = require('rotating-file-stream')
const { urls, port } = require('./service.json');
const { MONGODB_SERVER } = require('./service.json');
const mongoose = require('mongoose');

const authentication = require('./api/authentication');

// app.use('/user', authentication);
// create a rotating write stream
// var accessLogStream = rfs.createStream('access.log', {
//     interval: '1d', // rotate daily
//     path: path.join(__dirname, 'log')
//   })

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', authentication);

mongoose.connect(MONGODB_SERVER, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch(err => console.log("MongoDB Connection Failed!", err.message));



app.listen(port, () => {
    console.log(`Server running on ${urls + port}`)
})

module.exports = app;

