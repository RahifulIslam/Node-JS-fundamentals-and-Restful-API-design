 module.exports.checkUser = (req, res, next) => {
    const data = req.body.user;
    if(data){
        next();
    } else{
        res.send("You are not sending the user name! You must be give it.")
    }
}