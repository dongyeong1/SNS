const express = require('express')
const {User,Post,Image,Comment} =require('../models')
const { isLoggedIn } = require('./middlewares')

const router =express.Router()

router.post('/',isLoggedIn, async (req,res,next)=>{
   try{
    const post= await Post.create({
        content:req.body.content,
        UserId:req.user.id
    })
    const fullpost=await Post.findOne({
        where:{id:post.id},
        include:[
            {
                model:Image,
            },{
                model:Comment,
            
            },{
                model:User
            }
        ]
    })

    return res.status(201).json(fullpost)
   }catch(error){
console.error(error);
next(error)
   }
})


router.post('/:postId/comment',isLoggedIn, async (req,res,next)=>{
    try{
        const post =await Post.findOne({
            where:{id:req.params.postId}
        });
        if(!post){
            return res.status(403).send('존재하지않은 게시물')
        }

     const comment= await Comment.create({
         content:req.body.content,
         PostId:req.params.postId,
         UserId:req.user.id

     })
     return res.status(201).json(comment)
    }catch(error){
 console.error(error);
 next(error)
    }
 })
 


module.exports =router