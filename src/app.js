const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./db/conn');
const { model } = require('mongoose');
const User = require('./models/profiles')

app.use(express.json());

app.get('/',(req,res) =>{
    res.send("hello from the other side");
})

app.post('/profiles',(req,res) =>{
    res.send("hello from the other side");
    console.log(req.body);
    const User = new User(req.body)
    User.save().then(()=>{
        res.send(User);
    }).catch((e)=>{
        res.send(e);
    });
})

app.get('/profile',async(req,res)=>{
    try{
        const usersProfile = await Profile.find();
        res.send(usersProfile);
    }catch(e){
        res.send(e);
    }
})

app.get('/profile/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(req.params.id);
         const UserData =  await Profile.findById({_id:_id});
        
        if(!UserData){
            return res.status(404).send();
        }else{
            res.send(UserData);
        }
    }catch(e){
        res.send(e);
    }
})

app.delete('/profile/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(req.params.id);
         const UserData =  await Profile.findByIdAndDelete({_id:_id});
        if(!UserData){
            return res.status(404).send();
        }
        res.send(UserData);
    }catch(e){
        res.send(e);
    }
})

app.patch('/profile/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        console.log(req.params.id);
         const UserData =  await Profile.findByIdAndUpdate(_id,req.body,{
             new:true
         });
         res.send(UserData);
        if(!UserData){
            return res.status(404).send();
        }
        res.send(UserData);
    }catch(e){
        res.send(e);
    }
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})