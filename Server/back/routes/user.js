const express = require('express')
const bcrypt = require('bcrypt')
// const { nextTick } = require('vue/types/umd')
const { User, Post } = require('../models')
const passport =require('passport')
const db = require('../models')
const { isLoggedIn ,isNotLoggedIn} = require('./middlewares')


const router =express.Router()

router.get('/',async(req,res,next)=>{//get /user
    try{
       if(req.user){
        const user = await User.findOne({
            where:{id:req.user.id},
            attributes:{
                exclude:['password']
            },
            include:[{
                model:db.Post,
                attributes:['id']
            },{
                model:db.User,
                as:'Followings',
                attributes:['id']
            },{
                model:db.User,
                as:'Followers',
                attributes:['id']
            }]
        });
        return  res.status(200).json(user);
       }else{
           return res.status(200).json(null)
       }
    }catch(error){
        console.error(error)
        next(error)
    }
})

router.post('/',isNotLoggedIn,async(req,res,next)=>{
    try{
        const exUser=await User.findOne({
            where:{
                email:req.body.email
            }
        })
        if(exUser){
            return res.status(403).send('이미사용중인 아이디입니다.')
        }
        const hashedPassword=await bcrypt.hash(req.body.password,12)
        await User.create({
            email:req.body.email,
            nickname:req.body.nickname,
            password:hashedPassword,
        })
        res.status(200).send('ok');
    }catch(error){
        console.log(error)
        next(error)
    }
   
})

router.post('/login',isNotLoggedIn,(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err){//서버에러d
            console.log('dongssss')
            console.error(err);
            return next(err)
        }
        if(info){//클라이언트에러
        console.log(info.reason)
            return res.status(401).send(info.reason)
        }
        return req.login(user, async (loginErr)=>{
            if(loginErr){
                console.log('dongerr',loginErr)
                return next(loginErr)
            }
            const fullUserWithoutPassword=await User.findOne({//구글검색
                where:{
                    id:user.id
                },
                attributes:{
                    exclude:['password']
                },
                include:[{
                    model:db.Post
                },{
                    model:db.User,
                    as:'Followings',

                },{
                    model:db.User,
                    as:'Followers'
                }]
            })
            return res.status(200).json(fullUserWithoutPassword)
        })
    })(req,res,next)
});

router.post('/logout',isLoggedIn,(req,res)=>{
    req.logout();
    req.session.destroy();
    res.send('ok')
})

router.patch('/nickname',isLoggedIn,async(req,res,next)=>{
    try{
        await User.update({
            nickname:req.body.nickname,
        },{
            where:{id:req.user.id}
        })
        res.status(200).json({nickname:req.body.nickname})
    }catch(error){
        console.log(error)
        next(error)
    }
})

router.patch('/:userId/follow',isLoggedIn,async(req,res,next)=>{
    try{
        const user =await User.findOne({
            where:{
                id:req.params.userId
        }})
        if(!user){
            return res.status(403).send('없는사람')
        }
        await user.addFollowers(req.user.id)
        return res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
    }catch(error){
        console.log(error)
        next(error)
    }
})

router.delete('/:userId/follow',isLoggedIn,async(req,res,next)=>{
    try{
        const user =await User.findOne({
            where:{
                id:req.params.userId
        }})
        if(!user){
            return res.status(403).send('없는사람')
        }
        await user.removeFollowers(req.user.id)
        return res.status(200).json({ UserId: parseInt(req.params.userId, 10) })
    }catch(error){
        console.log(error)
        next(error)
    }
})

module.exports =router