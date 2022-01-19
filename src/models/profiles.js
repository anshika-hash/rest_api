const express = require('express');
const mongoose = require('mongoose');
const validator = require('validator');

const Profile = new mongoose.Schema({
    name:{
        type:String,
        required :true
    },
    dob :{
        type : String,
        required : true
    },
    status:{
        type: String,
        required : true
    },
   

})

 const User = new mongoose.model('User',Profile);
 module.exports = User;

 
 /*email:{
    type:String,
    required : true,
    unique:[true,'Email id Already Present'],
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('Invalid Email')
        }
    }
}*/
