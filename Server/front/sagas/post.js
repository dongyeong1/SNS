import axios from "axios";
import { all ,call,fork, put, takeLatest} from "redux-saga/effects";
import {
    ADD_POST_FAILURE,
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_FAILURE,
    REMOVE_POST_REQUEST,
    LOAD_POST_REQUEST,
    LOAD_POST_SUCCESS,
    LOAD_POST_FAILURE,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
    LIKE_POST_FAILURE,
    LIKE_POST_SUCCESS,
    UNLIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,

} from '../reducers/post'
import { ADD_POST_TO_ME, REMOVE_POST_TO_ME } from "../reducers/user";

function addPostAPI(data){
    return axios.post('/post',{content:data})
}

function* addPost(action)
{
    try{
        const result = yield call(addPostAPI,action.data)
        
        // yield delay(1000)
        // const id=shortId.generate()
        yield put({
            type:ADD_POST_SUCCESS,
            data:result.data
        })
        yield put({
            type:ADD_POST_TO_ME,
            data:result.data.id
        })
    }catch(err){
        console.log('errrrorrrrr',err.response.data)
        yield put({
            type:ADD_POST_FAILURE,
            erorr:err.response.data
        })

    }
}

function addCommentAPI(data){
    return axios.post(`/post/${data.postId}/comment`,{content:data.content})
}

function* addComment(action)
{
    try{
        const result = yield call(addCommentAPI,action.data)
        // console.log('123455',action.data)
        // yield delay(1000)
        yield console.log('resulttttttt',result.data)
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:result.data
        })
    }catch(err){
        yield put({
            type:ADD_COMMENT_FAILURE,
            data:err.response.data
        })

    }
}

function removePostAPI(data){
    return axios.delete(`/post/${data}`)
}

function* removePost(action)
{
    try{
        // console.log('POSTIDDIDIDIDIDID',action.data)
        const result = yield call(removePostAPI,action.data)
        // console.log('123455',action.data)
        // yield delay(1000)
        yield console.log('dongresulte',result.data)
        // yield console.log('qweqwrqwerwetrwertwe',result.data.removedPost)
        // yield console.log('IDIDIDIDIDIDIDID',result.data.id)
        yield put({
            type:REMOVE_POST_SUCCESS,
            data:result.data
        })
        yield put({
            type:REMOVE_POST_TO_ME,
            data:result.data
        })
    }catch(err){
        console.log('err',err)
        yield put({
            type:REMOVE_POST_FAILURE,
            error:err,
        })

    }
}

function loadPostAPI(){
    return axios.post('/post/loadPost')
}

function* loadPost(){

    try{
        const result=yield call(loadPostAPI)

    yield put({
        type:LOAD_POST_SUCCESS,
        data:result.data
    })


    }catch(error){
        console.error(error)
        yield put({
            type:LOAD_POST_FAILURE,
            error:error.response.data
        })
    }


    
}



function likeAPI(data){
    return axios.patch(`/post/${data}/like`)
}

function* like(action){

    try{
        const result=yield call(likeAPI,action.data)

    yield put({
        type:LIKE_POST_SUCCESS,
        data:result.data
    })


    }catch(error){
        console.error(error)
        yield put({
            type:LIKE_POST_FAILURE,
            error:error.response.data
        })
    }


    
}


function unlikeAPI(data){
    return axios.delete(`post/${data}/like`)
}

function* unlike(action){

    try{
        const result=yield call(unlikeAPI,action.data)

    yield put({
        type:UNLIKE_POST_SUCCESS,
        data:result.data
    })


    }catch(error){
        console.error(error)
        yield put({
            type:UNLIKE_POST_FAILURE,
            error:error.response.data
        })
    }


    
}



function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost)
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment)
}
function* watchremovePost(){
    yield takeLatest(REMOVE_POST_REQUEST,removePost)
}
function* watchLoadPost(){
    yield takeLatest(LOAD_POST_REQUEST,loadPost)
}
function* watchLikePost(){
    yield takeLatest(LIKE_POST_REQUEST,like)
}
function* watchUnLikePost(){
    yield takeLatest(UNLIKE_POST_REQUEST,unlike)
}





export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchremovePost),
        fork(watchLoadPost),
        fork(watchLikePost),
        fork(watchUnLikePost)
    ])
}