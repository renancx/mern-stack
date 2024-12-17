import mongoose from 'mongoose';
import UserModel from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(409).json({message: 'User already exist', success: false});
        }
        const userModel = new UserModel({name, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({message: 'Signup successfully', success: true});
    } catch (error) {
        res.status(500).json({message: 'Internal server error', success: false});
    }
};

export const login = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(403).json({message: 'Email or password is wrong', success: false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(403).json({message: 'Email or password is wrong', success: false});
        }
        const jwtToken = await jwt.sign({email: user.email, _id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({message: 'Login success', success: true, jwtToken, email, name: user.name});
    } catch (error) {
        res.status(500).json({message: 'Internal server error', success: false});
    }
};
