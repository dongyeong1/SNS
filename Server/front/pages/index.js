import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import AppLayout from '../components/AppLayout'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
import { useDispatch } from 'react-redux';
import { LOAD_POST_REQUEST } from '../reducers/post'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'


function index() {
    const {me}=useSelector((state)=>state.user)
    const mainPosts=useSelector((state)=>state.post.mainPosts)
    const dispatch=useDispatch();



    useEffect(()=>{
      dispatch({
        type:LOAD_POST_REQUEST
      })
      dispatch({
        type:LOAD_MY_INFO_REQUEST
      })
     
    },[])



  return (
    <AppLayout>

    {me?    <PostForm></PostForm>: null}

    {mainPosts.map((post)=><PostCard key={post.id} post={post}></PostCard>)}
   
    
    </AppLayout>
    )
}

export default index