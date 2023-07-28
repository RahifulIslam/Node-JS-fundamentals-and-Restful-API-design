const app = require('./app');
const { MONGODB_SERVER} = require('./service.json')
const mongoose = require('mongoose');

mongoose.connect(MONGODB_SERVER, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.log("MongoDB Connection Failed!", err.message));
