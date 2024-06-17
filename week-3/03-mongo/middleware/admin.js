const { Admin } = require ("../db")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; // amitesh@gmail.com
    const password = req.headers.password;  //123456

    Admin.findOne({
        username,
        password

    })
    .then((value)=>{
        if (value){
            next();
        }
        else{
            res.status(404).json({
                msg: "admin does not found"
            })
        }
    })
}

module.exports = adminMiddleware;