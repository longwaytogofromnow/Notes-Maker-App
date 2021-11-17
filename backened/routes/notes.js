const express=require('express');
const router= express.Router();

router.get('/', (req,res)=>{
    obj={
        Name:"Krishna Kumar",
        Age:21
    }
    res.json(obj)
})

module.exports= router