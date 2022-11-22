import axios from "axios";
import { all ,call,delay,fork, put, takeLatest} from "redux-saga/effects";
import shortId from "shortid";
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

} from '../reducers/post'
import { ADD_POST_TO_ME, REMOVE_POST_TO_ME } from "../reducers/user";

function addPostAPI(data){
    return axios.post('/api/post',data)
}

function* addPost(action)
{
    try{
        // const result = yield call(addPostAPI,action.data)
        
        yield delay(1000)
        const id=shortId.generate()
        yield put({
            type:ADD_POST_SUCCESS,
            data:{
                id,
                content:action.data
            }
        })
        yield put({
            type:ADD_POST_TO_ME,
            data:id
        })
    }catch(err){
        yield put({
            type:ADD_POST_FAILURE,
            data:err.response.data
        })

    }
}

function addCommentAPI(data){
    return axios.post('/api/comment',data)
}

function* addComment(action)
{
    try{
        // const result = yield call(addPostAPI,action.data)
        console.log('123455',action.data)
        yield delay(1000)
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:action.data
        })
    }catch(err){
        yield put({
            type:ADD_COMMENT_FAILURE,
            data:err.response.data
        })

    }
}

function removePostAPI(data){
    return axios.post('/api/removePost',data)
}

function* removePost(action)
{
    try{
        // const result = yield call(addPostAPI,action.data)
        // console.log('123455',action.data)
        yield delay(1000)
        yield put({
            type:REMOVE_POST_SUCCESS,
            data:action.data
        })
        yield put({
            type:REMOVE_POST_TO_ME,
            data:action.data
        })
    }catch(err){
        yield put({
            type:REMOVE_POST_FAILURE,
            data:err.response.data
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



export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchremovePost)
    ])
}