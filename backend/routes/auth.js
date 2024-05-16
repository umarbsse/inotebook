const express = require('express');
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const router = express.Router();


//Creat a User using : POST "/ai/auth/". Doest not required auth
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }).escape(),
    body('email', 'Enter a valid email').isEmail().escape(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }).escape()
], (req, res) => {
    //const user=User(req.body)
    //user.save()
    //console.log(user)
    //res.send(req.body)

    const result = validationResult(req);

    //IF VALIDATION FAILED
    if (!result.isEmpty()) {
        res.send({ errors: result.array() });
    } else {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => res.json(user))
            .catch(err => {
                console.log(err)
                res.json({ error: "Please enter a unique value for email",message:err.message })
            })
    }
})

router.get('/',(req, res)=>{
    //res.send(req.body)
    console.log("Get Auth Req")
})
module.exports = router