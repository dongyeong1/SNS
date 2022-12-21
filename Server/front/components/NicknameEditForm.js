

import { Form, Input } from 'antd';
import React ,{useCallback,}from 'react';
import useinput from '../../../Server/front/hooks/useinput';
import { NICKNAME_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';




const NicknameEditForm = () => {

    const {me}=useSelector((state)=>state.user)
    const [nickname,onChangeNickname]=useinput(me?.nickname || '');
    const dispatch=useDispatch()

    const onSubmit=useCallback(()=>{
        dispatch({
            type:NICKNAME_REQUEST,
            data:nickname
        })
    },[nickname])

  return (
    <Form  style={{ marginBottom: '20px', border: '1px solid #d9d9d9', padding: '20px' }}>
      <Input.Search onSearch={onSubmit} onChange={onChangeNickname} addonBefore="닉네임" value={nickname} enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;