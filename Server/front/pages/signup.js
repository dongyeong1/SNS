import React,{useState,useCallback} from 'react'
import AppLayout from '../components/AppLayout'
import {Button, Checkbox, Form,Input} from 'antd'
import useinput from '../hooks/useinput'
import { useDispatch, useSelector } from 'react-redux'
import { SIGN_UP_REQUEST } from '../reducers/user'

function signup() {
    const dispatch =useDispatch();
    const {signupLoading}=useSelector((state)=>state.user)

    const [email,onChangeEmail]=useinput('')
    const [nickname,onChangeNickname]=useinput('')
    const [password,onChangePassword]=useinput('')

    const [passwordCheck,setPasswordCheck]=useState('')
    const onChangePasswordCheck=useCallback((e)=>{
        setPasswordCheck(e.target.value)
        // setPasswordError(e.target.value=)

    },[])
    const [passwordError,setPasswordError]=useState(false);

    const [term,setTerm]=useState(false)
    const onChangeTerm=useCallback((e)=>{
        console.log(e.target)
        setTerm(e.target.checked)
    },[])
    const [termError,setTermError]=useState(false)
   

    const onSubmit=()=>{
        console.log('assd')
        if(passwordCheck!==password){
             setPasswordError(true)
        }else if(passwordCheck===password){
             setPasswordError(false)
        }
        //밑에 i
        if(term){
            console.log(true)
             setTermError(false)
        }else if(!term){
            console.log(false)

             setTermError(true)
        }
        dispatch({
            type:SIGN_UP_REQUEST,
            data:{
                email,password,nickname
            }
        })
    }

  return (
        <AppLayout>
           <Form onFinish={onSubmit} style={{padding:10}}>

                <div>
                    <label htmlFor='user-id'>이메일</label>
                    <br></br>
                    <Input name='user-id' type='email' value={email} required onChange={onChangeEmail}></Input>
                </div>

                <div>
                    <label htmlFor='user-nickname'>닉네임</label>
                    <br></br>
                    <Input name='user-nickname' value={nickname} required onChange={onChangeNickname}></Input>
                </div>

                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br></br>
                    <Input name='user-password' value={password} required onChange={onChangePassword}></Input>
                </div>

                <div>
                    <label htmlFor='user-passwordCheck'>비밀번호확인</label>
                    <br></br>
                    <Input name='user-passwordCheck' value={passwordCheck} required onChange={onChangePasswordCheck}></Input>
                    {passwordError ?<div style={{color:'red'}}>비밀번호가 일치하지않습니다.</div>:null}
                </div>
                <div>
                    <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>제로초말을 들을것을 동의합니다.</Checkbox>
                    {termError ? <div style={{color:'red'}}>약관에 동의하셔야 합니다.</div>:null}
                </div>
                <Button type='primary' htmlType='submit' loading={signupLoading} style={{marginTop:100}}>회원가입</Button>


            </Form>
        </AppLayout>
    
  )
}

export default signup