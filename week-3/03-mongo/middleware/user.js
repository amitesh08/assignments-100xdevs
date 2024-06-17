const { User } = require ("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // amitesh@gmail.com
    const password = req.headers.password;  //123456

    User.findOne({
        username,
        password

    })
    .then((value)=>{
        if (value){
            next();
        }
        else{
            res.status(404).json({
                msg: "user not found"
            })
        }
    })
}

module.exports = userMiddleware;