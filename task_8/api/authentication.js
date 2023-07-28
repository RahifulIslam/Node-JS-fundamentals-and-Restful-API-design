const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('./model');
const jwt = require("jsonwebtoken");
const _ = require('lodash');
const { jwt_secret } = require('../service.json');
// console.log("User", User)
const  chcheckLogin  = require('./authorize');
const {validate} = require('./validation');

 router.post('/registration', async (req, res)=>{
  const data = req.body;
  const { error } = validate(data);
  // console.log("Error", error)
  if (error) return res.status(400).send(error.details[0].message);
    
    data.password = await bcrypt.hash(data.password, 10);
    
    const user = new User({
        user_id: data.user_id,
        name: data.name,
        email: data.email,
        password: data.password
    });

    try{
    const newUser = await user.save();
    res.status(201).send(newUser);
    } catch(err){
        res.status(404).send(err.message);
    }
});

router.post('/login', async(req, res)=>{
    try{
    const user = await User.findOne({email: req.body.email});
    if(!user) res.status(400).send("Invalid User");

    const validUser = bcrypt.compare(req.body.password, user.password);
    if(!validUser) return res.status(400).send('Invalid password');

    const accessToken = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        jwt_secret,
        {
          expiresIn: "9h",
        }
      );

      return res.status(200).send({
        "message": "Login successfully",
        token: accessToken,
        user: _.pick(user, ["_id", "name", "email"])
      });

    } catch(err){
        res.status(404).send(err.message)
    }
});

router.post('/getUser', chcheckLogin, async(req, res) => {
  try{
    const user = await User.find().sort({user_id: 1}).select({password: 0})
    return res.status(200).send({
      "message": "Student showed successfully",
       student: user
    });
  } catch(err){
    return res.status(400).send({
      "message": "Something went wrong",
      error: message.err
    });
  }
});


module.exports = router;