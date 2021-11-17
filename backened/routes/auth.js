const express= require('express');
const router= express.Router();

router.get('/', (req,res)=>{
    obj={
        Name:"Krishna Kumar",
        Roll_No: 76
    }
    res.json(obj)
})

module.exports= router