import React from 'react'
import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'
import { useSelector } from 'react-redux'

function profile() {

    const {me}=useSelector((state)=>state.user)
    

  return (
    <div>
        <AppLayout>
            <NicknameEditForm></NicknameEditForm>
            <FollowList header="팔로잉목록" data={me.Followings}></FollowList>
            <FollowList header="팔로워목록" data={me.Followers}></FollowList>
        </AppLayout>
    </div>
  )
}

export default profile