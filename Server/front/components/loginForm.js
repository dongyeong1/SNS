import React ,{useEffect}from 'react'
import {Button, Form,Input} from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import useinput from '../hooks/useinput'
import {useDispatch, useSelector} from 'react-redux'
import {loginRequestAction} from '../reducers/user'

const ButtonWrapper=styled.div`
margin-top:10px;
`

const FormWrapper=styled(Form)`
    padding:10px;
    `

function LoginForm() {

    const dispatch=useDispatch();

    const { loginLoading ,loginError} =useSelector((state)=>state.user)

    const [email,onChangeEmail]=useinput('')
    const [password,onChangePassword]=useinput('')

    useEffect(()=>{
        if(loginError){
            alert(loginError)
        }
    },[loginError])

  
    const onSubmitForm=()=>{
        // setIsLogin(true)
        dispatch(loginRequestAction({
            email,
            password
        }))
    }

  return (
    <FormWrapper onFinish={onSubmitForm}>
        <div>
            <label htmlFor='user-id'>이메일</label>
            <br></br>
            <Input name="user-id" type='email' value={email} onChange={onChangeEmail} required />
        </div>

        <div>
            <label htmlFor='user-password'>비밀번호</label>
            <br></br>
            <Input name="user-password" value={password} onChange={onChangePassword} required />
        </div>

        <ButtonWrapper  style={{marginTop:10}}>
            <Button type='primary' htmlType='submit' loading={loginLoading} >로그인 </Button>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </ButtonWrapper>
    </FormWrapper>
  )
}

export default LoginForm