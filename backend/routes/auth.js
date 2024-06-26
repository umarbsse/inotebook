const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser')



const router = express.Router();
const JWT_SECRET = "UMERISNOTaGOODB$Y"





//Route 1: Creat a User using : POST "/api/auth/createuser". No required login
router.post(
    "/createuser",
    [
        body("name", "Enter a valid name").isLength({ min: 3 }).escape(),
        body("email", "Enter a valid email").isEmail().escape(),
        body("password", "Password must be atleast 5 characters")
            .isLength({ min: 5 })
            .escape(),
    ],
    async (req, res) => {
        let success = false;
        //If ther are error return bad request and the errors

        const errors = validationResult(req);

        //IF VALIDATION FAILED
        if (!errors.isEmpty()) {
            res.send({ success,errors: errors.array() });
        }
        //Check wether the user with this email exist already

        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res
                    .status(400)
                    .json({ success,error: "Sorry a user with this email alread exists" });
            }
            const salt = await bcrypt.genSalt(10)
            const secPass = await bcrypt.hash(req.body.password,salt)
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            });


            
            const data ={user:{id:user.id}}


            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;

            res.json({success,authtoken:authToken});
        } catch (error) {
            //console.error(error.message);
            res.status(500).json({ success,error: "Internal Server Error" });
        }
    }
);


//Route 2: Authenticate a User using : POST "/api/auth/login". No required login
router.post(
    "/login",
    [
        body("email", "Enter a valid email").isEmail().escape(),
        body("password", "Password can not be blanked").exists()
    ],
    async (req, res) => {
            let success = false;
        
        
        

            //If ther are error return bad request and the errors

            const errors = validationResult(req);

            //IF VALIDATION FAILED
            if (!errors.isEmpty()) {
                res.status(400).send({success,  errors: errors.array() });
            }
            

        try {

            const {email,password}=req.body;

            let user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({success, error:"Please try to loging with correct creedntials"});
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({success, error:"Please try to loging with correct creedntials"});
            }


            
            const data ={user:{id:user.id}}


            const authToken = jwt.sign(data, JWT_SECRET);
            success = true;


            res.json({ success, authToken});
            
        } catch (error) {
            //console.error(error.message);
            res.status(500).send("Internal Server Error");
        }

    }
);




//Route 3: Get loggedin User Details using : POST "/api/auth/getuser". required login
router.post("/getuser",fetchuser, async (req, res) => {
        try {
            userId = req.user.id;
            const user = await User.findById(userId).select("-password")
            res.send(user)
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
)

module.exports = router;
