import mongoose from 'mongoose';
import User from './user.model.js'
import bcrypt from 'bcrypt'

export const addUserService = async(req,res)=>{
    console.log(req.body);
    const {name,password,email} = req.body;
    const hashPassword = await bcrypt.hash(password,5);
    console.log(name,email,hashPassword);
    const user = await new User({
        name: name,
        password: hashPassword,
        email: email
    })
    await user.save();
    res.json({msg:"new user created successfully", User: user})
}

export const getUserService = async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({'email': email});
    if(!user) res.json({msg: "User does not exist"})
    else{
       const hashPassword = await user.password;
       if(await bcrypt.compare(password,hashPassword)) res.json({msg: "Login successful"})
       else{
            res.json({msg: "Incorrect password"})
        }
        
    }
}