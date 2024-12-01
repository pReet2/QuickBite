import userModel from "../models/userModel"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//Login User
const loginUser = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message:'User does not exists'})
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch){
            return res.json({success:false, message:'Invalid Credentials'})
        }

        const token = createToken(user._id);
        res.json({success:true, token})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:'Error'})
    }
}

const createToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// Register User
const registerUser = async(req, res) =>{
    const {name, password, email} = req.body;

    try{
        const userExists = await userModel.findOne({email});
        if(userExists){
            return res.json({success:false, message:'User already exists'})
        }

        // Validate strong password and emailformat
        if(!validator.isEmail(email)){
            return res.json({success:false, message:'Please enter a valid Email Id'})
        }

        if(!validator.isStrongPassword(password, {min_length: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1})) {
            return res.json({success:false, message:'Please Enter a strong password '})
        }

        // hashing the user password 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true, token})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:'Error'})
    }
}

export {loginUser, registerUser}