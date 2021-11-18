const express= require('express');
const User = require('../models/User');
const router= express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET= "Krishnaisagoodb$oy"

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
    const salt= await bcrypt.genSalt(10);
    const secPass= await bcrypt.hash(req.body.password,salt)
    // create a new user
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass
      })
      
      const data={
        user:{
          id:user.id
        }
      }
      const authtoken=jwt.sign(data,JWT_SECRET)
      res.json(authtoken)
    }
     catch (error){
       console.error(error.message); 
       res.status(500).send("some error occured");
    }

})

module.exports= router