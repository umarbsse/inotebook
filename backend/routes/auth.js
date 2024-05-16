const express = require('express');
const User = require("../models/User")
const router = express.Router();


//Creat a User using : POST "/ai/auth/". Doest not required auth
router.post('/',(req, res)=>{
    const user=User(req.body)
    user.save()
    console.log(user)
    res.send(req.body)
})

router.get('/',(req, res)=>{
    //res.send(req.body)
    console.log("Get Auth Req")
})
module.exports = router