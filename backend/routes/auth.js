const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    obj = {
        a: 'thios',
        number: 3
    }
    res.json(obj)
})
module.exports = router