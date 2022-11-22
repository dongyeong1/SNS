import React from 'react'
import {Button, Card} from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import {useDispatch, useSelector} from 'react-redux'

import {logoutRequestAction} from '../reducers/user'

function userProfile() {

    const { me ,logoutLoading} =useSelector((state)=>state.user)

    const dispatch=useDispatch();

  const logout=()=>{
    //   setIsLogin(false)
    dispatch(logoutRequestAction())
  }

  return (
    <Card
    actions={[
        <div key='twit'>게시물수{me.Posts.length}</div>,
        <div key='followings'>팔로잉수{me.Followings.length}</div>,
        <div key='followers'>팔로워수{me.Followers.length}</div>
    ]}
    >
        <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
        ></Card.Meta>
        <Button onClick={logout} loading={logoutLoading}>로그아웃</Button>
    </Card>
  )
}

export default userProfile