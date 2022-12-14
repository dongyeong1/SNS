import { all ,fork,delay,put,call,takeLatest} from "redux-saga/effects";
import axios from 'axios'
import { 
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE, 
    FOLLOW_REQUEST,
    UNFOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAILURE,
    UNFOLLOW_FAILURE,
    UNFOLLOW_SUCCESS,
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOAD_MY_INFO_FAILURE,
    NICKNAME_REQUEST,
    NICKNAME_SUCCESS,
    NICKNAME_FAILURE
} from '../reducers/user'

function loginAPI(data){
    return axios.post('/user/login',data)
    // return console.log('12345566')
}


function* login(action){
//     console.log('qwereqrewrasdfdasd')
const result =yield call(loginAPI,action.data)

// yield delay(1000)
try{
    yield put({
        type:LOG_IN_SUCCESS,
        data:result
    })
}
catch(error){
    console.log('loginessadasdasdasrr',error)
    yield put({
        type:LOG_IN_FAILURE,
        error:error.response.data,
    })
}
}

function logOutAPI(){
    return axios.post('/user/logout')
}

function* logout(){
    try{
        // yield call(logOutAPI)
        yield delay(1000)
        yield put({
            type:LOG_OUT_SUCCESS,
        })
    }catch(err){
        yield put({
            type:LOG_OUT_FAILURE,
            error:err.response.data,
             
        })
    }

}
function signupAPI(data){
    return axios.post('/user',data)
}

function* signup(action){
    try{
        const result = yield call(signupAPI,action.data)
        // yield delay(1000)
        console.log(result)
        yield put({
            type:SIGN_UP_SUCCESS,
            data:result
        })
    }catch(err){
        console.log('eeeeerrrr',err.response)
        yield put({
            type:SIGN_UP_FAILURE,
            error:err.response.data,
        })
          
    }
}

function followAPI(data){
    return axios.patch(`user/${data}/follow`)
}

function* follow(action){
    try{
        const result=yield call(followAPI,action.data)
        console.log('resssssss',result.data)
        yield put({
            type:FOLLOW_SUCCESS,
            data:result.data
        })
    }catch(err){
        yield put({
            type:FOLLOW_FAILURE,
            error:'error',
        })
          
    }
}

function unfollowAPI(data){
    return axios.delete(`user/${data}/follow`)
}

function* unfollow(action){
    try{
        const result=yield call(unfollowAPI,action.data)

        yield put({
            type:UNFOLLOW_SUCCESS,
            data:result.data     
           })
    }catch(err){
        yield put({
            type:UNFOLLOW_FAILURE,
            error:'error',
        })
          
    }
}


function LoadMyInfoAPI(){
    return axios.get('/user')
}

function* LoadMyInfo(){
    try{
        // yield delay(1000)
        const result =yield call(LoadMyInfoAPI)
        yield put({
            type:LOAD_MY_INFO_SUCCESS,
            data:result.data
        })
    }catch(err){
        yield put({
            type:LOAD_MY_INFO_FAILURE,
            error:err.response.data,
        })
          
    }
}



function changeNicknameAPI(data){
    return axios.patch('/user/nickname',{nickname:data})
}

function* changeNickname(action){
    try{
        // yield delay(1000)
        const result =yield call(changeNicknameAPI,action.data)
        yield put({
            type:NICKNAME_SUCCESS,
            data:result.data
        })
    }catch(err){
        yield put({
            type:NICKNAME_FAILURE,
            error:err.response.data,
        })
          
    }
}


function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST,login)
}
function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST,logout)
}
function* watchSignup(){
    yield takeLatest(SIGN_UP_REQUEST,signup)
}
function* watchFollowing(){
    yield takeLatest(FOLLOW_REQUEST,follow)
}
function* watchUnFollowing(){
    yield takeLatest(UNFOLLOW_REQUEST,unfollow)
}
function* watchLoadMyInfo(){
    yield takeLatest(LOAD_MY_INFO_REQUEST,LoadMyInfo)
}
function* watchChangeNickname(){
    yield takeLatest(NICKNAME_REQUEST,changeNickname)
}



export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchSignup),
        fork(watchFollowing),
        fork(watchUnFollowing),
        fork(watchLoadMyInfo),
        fork(watchChangeNickname)
    ])
}