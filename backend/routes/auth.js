const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();

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
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });
            res.json(user);
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
