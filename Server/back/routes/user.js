const express = require('express')
const bcrypt = require('bcrypt')
// const { nextTick } = require('vue/types/umd')
const { User } = require('../models')
const passport =require('passport')
const db = require('../models')
const { isLoggedIn ,isNotLoggedIn} = require('./middlewares')


const router =express.Router()

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

module.exports =router