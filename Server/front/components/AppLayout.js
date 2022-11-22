import React ,{useState}from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {Menu,Input,Button,Row,Col} from 'antd'
import 'antd/dist/antd.css'
import LoginForm from './LoginForm'
import UserProfile from './userProfile'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import { applyMiddleware } from 'redux'
import useSelection from 'antd/lib/table/hooks/useSelection'

const SearchInput=styled(Input.Search)`
vertical-align=middle
`;


function AppLayout({children}) {
    // const [isLogin,setIsLogin]=useState(false)
    const isLoggedIn=useSelector((state)=>state.user.isLoggedIn)//isLoggedIn이 변경돠면 AppLayout컴포넌트가 자동으로 리렌더링된다
    const {me}=useSelector((state)=>state.user)



  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <SearchInput enterButton />
        </Menu.Item>
      </Menu>
      {/* <Link href="/signup">
        <a><Button>회원가입</Button></a>
      </Link> */}
      <Row gutter={12}>
                <Col xs={24} md={6}>
                   {me?<UserProfile></UserProfile>:<LoginForm></LoginForm>}
                </Col>
                <Col xs={24} md={12}>{children}</Col>
                <Col xs={24} md={6}>sa</Col>

            </Row>
    </div>
  )
}

AppLayout.propTypes={
    children: PropTypes.node.isRequired
}

export default AppLayout