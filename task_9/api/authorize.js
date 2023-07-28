const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../service.json')
const User = require('./model');

const checkLogin = async (req, res, next) => {
    try{
        let token = req.header('Authorization');
        if (token) {
            token = token.split(" ")[1].trim();
            const decode = jwt.verify(
              token,
              jwt_secret
            );
    
            const { id, email } = decode;
            // console.log("Id are:", id);
            // console.log("Email are:", email);
    
            const checkId = await User.findOne({email: email});
            // console.log("CheckID are", checkId)
            if (checkId) {
              req.id = id;
              req.email = email;
              
              next();
            } else{
              res.status(404).send('Token data are not exist in the database');
            }
    
          } else {
            res.status(402).json({
              status: 402,
              success: false,
              message: 'Token unavailable',
              isLogin: false,
            });
          }
    } catch(err){
        res.status(401).json({
            message: err.message,
            body: null,
          });
    }

}

module.exports = checkLogin;