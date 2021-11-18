const express= require('express');
const User = require('../models/User');
const router= express.Router();
const { body, validationResult } = require('express-validator');

// create a user using:POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({min:4})    
] , async (req,res)=>{
  // If there are errors,returb Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email already exists!

    try{

    let user = await User.findOne({email:req.body.email});
    if(user){
      return res.status(400).json({error:"Sorry a user with this email already exists"})
    }
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      
      res.json(user)
    }
     catch (error){
       console.error(error.message); 
       res.status(500).send("some error occured");
    }

})

module.exports= router