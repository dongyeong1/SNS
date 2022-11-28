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

router.post('/removePost',isLoggedIn,async (req,res,next)=>{
    try{
        await Post.destroy({
            where:{
                id:req.body.postId
            }
        })
        const removedPost=await Post.findAll({
            include:[
                {
                    model:Image,
                },{
                    model:Comment,
                
                },{
                    model:User
                }
            ]
        });
        // const removedUser=await User.findOne({
        //     where:{id:req.user.id},
        //     include:[
        //         {
        //             model:Post
        //         },{
        //             model:User,
        //             as:'Followings',
        //         },{
        //             model:User,
        //             as:'Followers'
        //         }

        //     ]
            
        // })
        // console.log('removeddata')
        const abc={
            removedPost,
            id:req.body.postId
        }
      

        return res.status(201).json(abc)
    }catch(error){
        console.error(error)
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

    //  const CommentWithUser= await Comment.findOne({
    //      where:{
    //          PostId:req.params.postId
    //      },
    //      include:[
    //         {
    //             model:User,
    //             attributes:['nickname']
    //         }
    //     ]

    //  })
     const fullComment = await Comment.findOne({
        where: { id: comment.id },
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      })


     return res.status(201).json(fullComment)
    }catch(error){
 console.error(error);
 next(error)
    }
 })



 router.post('/loadPost',async(req,res,next)=>{
     try{
        const fullPost=await Post.findAll({
            include:[
                {
                    model:Image,
                },{
                    model:Comment,
                    include: [{
                        model: User,
                        attributes: ['id', 'nickname'],
                      }],
                
                },{
                    model:User
                }
            ]
        });
        return res.status(201).json(fullPost)
     }catch(error){
         console.error(error);
         next(error)
     }
 })
 


module.exports =router