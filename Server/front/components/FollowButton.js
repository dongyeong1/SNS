import React,{useCallback} from 'react'
import { Button} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import {FOLLOW_REQUEST,UNFOLLOW_REQUEST} from '../reducers/user'



function FollowButton({post}) {
    const dispatch =useDispatch()
    const {me,followLoading,unfollowLoading }=useSelector((state)=>state.user)
    const isFollowing =me&&me.Followings.find((v)=>v.id===post.User.id)
    const onFollow=useCallback(()=>{
        if(isFollowing){
            dispatch({
                type:UNFOLLOW_REQUEST,
                data:post.User.id
            })
        
        }else{

            dispatch({
                type:FOLLOW_REQUEST,
                data:post.User.id
            })
        }
    },[isFollowing])


    if(post.User.id===me.id){
        return null
    }
  return (
      <>
      {isFollowing? <Button loading={unfollowLoading} onClick={onFollow}>언팔로우</Button>: <Button loading={unfollowLoading} onClick={onFollow}>팔로우</Button>}
        </>
   
  )
    }

export default FollowButton