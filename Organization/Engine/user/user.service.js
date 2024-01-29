import mongoose from "mongoose";
import User from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const SECRET_KEY = 'RAJAT%$#*07';

export const addUserService = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await new User({
      name: name,
      password: hashPassword,
      email: email,
    });
    await user.save();
    res.json({ msg: "new user created successfully", User: user });
  } catch (e) {
    res.json("error", e);
  }
};

export const getUserService = async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  console.log(email,password)
  try {
    const user = await User.findOne({ email: email });
    if (!user) res.json({ msg: "User does not exist" });
    else {
      const hashPassword = user.password;
      if (await bcrypt.compare(password, hashPassword)){
        const token = jwt.sign({userEmail:email},SECRET_KEY,{expiresIn:'1m'});
        res.status(200).json({ token });
        // res.json({msg:"login done"})
      }
      else {
        res.json({ msg: "Incorrect password" });
      }
    }
  } catch (e) {
    console.error("error", e);
  }
};
