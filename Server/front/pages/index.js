import React from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'

function index() {
    const {me}=useSelector((state)=>state.user)
    const mainPosts=useSelector((state)=>state.post.mainPosts)
  return (
    <AppLayout>

    {me?    <PostForm></PostForm>: null}

    {mainPosts.map((post)=><PostCard key={post.id} post={post}></PostCard>)}
   
    
    </AppLayout>
    )
}

export default index