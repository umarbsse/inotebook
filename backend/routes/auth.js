const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



const router = express.Router();
const JWT_SECRET = "UMERISNOTaGOODB$Y"





//Creat a User using : POST "/api/auth/createuser". No required login
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
        //If ther are error return bad request and the errors

        const errors = validationResult(req);

        //IF VALIDATION FAILED
        if (!errors.isEmpty()) {
            res.send({ errors: errors.array() });
        }
        //Check wether the user with this email exist already

        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res
                    .status(400)
                    .json({ error: "Sorry a user with this email alread exists" });
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


            res.json({authtoken:authToken});
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error occured");
        }
    }
);

router.get("/", (req, res) => {
    console.log("Get Auth Req");
});
module.exports = router;
