import { Button, Form, Input } from 'antd';
import React, { useCallback ,useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import useinput from '../hooks/useinput';

const CommentForm = ({ post }) => {
    const dispatch=useDispatch()
    const id=useSelector((state)=>state.user.me?.id)
    const {addcommentDone,addcommentLoading}=useSelector((state)=>state.post)
  const [commentText, onChangeCommentText,setComment] = useinput('');


    useEffect(()=>{
        if(addcommentDone){
            setComment('')
        }
    },[addcommentDone])
  const onSubmitComment = useCallback(() => {
    // console.log(commentText);
    dispatch({
        type:ADD_COMMENT_REQUEST,
        data:{
            content:commentText,
            postId:post.id,
            userId:id
            
        }
    })
  }, [commentText,id]);

  
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
        <Button loading={addcommentLoading} style={{marginLeft:650,marginTop:10,zIndex:1}} type="primary" htmlType="submit">삐약</Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;