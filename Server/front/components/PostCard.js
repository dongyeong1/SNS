import React, { useState, useCallback,useEffect } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
// import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import PostCardContent from './PostCardContent';

import CommentForm from './CommentForm';
// import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import { REMOVE_POST_REQUEST ,LIKE_POST_REQUEST,UNLIKE_POST_REQUEST,LOAD_POST_REQUEST} from '../reducers/post';
import FollowButton from './FollowButton';

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({ post }) => {

  const dispatch=useDispatch();

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  
  const {removepostLoading}=useSelector((state)=>state.post)

  const [liked, setLiked] = useState(false);


  const onLike = useCallback(() => {
    dispatch({
      type:LIKE_POST_REQUEST,
      data:post.id
    })
  }, []);
  const onUnLike = useCallback(() => {
    dispatch({
      type:UNLIKE_POST_REQUEST,
      data:post.id
    })
  }, []);


  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const postRemove=()=>{
    dispatch({
        type:REMOVE_POST_REQUEST,
        data:post.id
    })
  }
  const id = useSelector((state) => state.user.me?.id);
  // const liked=post.Likers.find((v)=>v.id===id)///ssr로바꾸면될듯
  
  // if(post.Likers.length==0}){
  //   console.log('as')
  // }]
  // if(post){
  // const liked=post.Likers.find((v)=>v.id===id)
  // }
 

  // setTimeout(() => {
  //   const liked=post.Likers.find((v)=>v.id===id)}
  //   , 3000);

  console.log('qweqwe',post.Likers)
  // c

  return (
    <CardWrapper key={post.id}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}//a&&b a가true면 b를 반환 a가false면 a반환
        actions={[
          <RetweetOutlined key="retweet" />,
              liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike} />
            : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                {id && post.User.id === id
                  ? (
                    <>
                      <Button>수정</Button>
                      <Button onClick={postRemove} loading={removepostLoading} type="danger">삭제</Button>
                    </>
                  )
                  : <Button>신고</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={id&&<FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          description={<PostCardContent PostData={post.content}></PostCardContent>}
          title={post.User.nickname}
        //   description={post.content}
        //   description={<PostCardContent postData={post.content} />}
        // }
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    // <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    // </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default PostCard;