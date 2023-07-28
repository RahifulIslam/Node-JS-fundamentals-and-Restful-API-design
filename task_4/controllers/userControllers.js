module.exports.createUser = (req, res) => {
const user = req.body.username;
if(user){
    res.status(201).send(`User created successful. Congratulations ${user}`);
} else{
    res.status(404).send("Somethig went wrong!");
}
}