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
    LOG_IN_FAILURE } from '../reducers/user'

function loginAPI(data){
    // return axios.post('/user/login')
    return console.log('12345566')
}


function* login(action){
//     console.log('qwereqrewrasdfdasd')
// const result =yield call(loginAPI,action.data)

yield delay(1000)
try{
    yield put({
        type:LOG_IN_SUCCESS,
        data:action.data
    })
}
catch(err){
    yield put({
        type:LOG_IN_FAILURE,
        error:err.response.data,
    })
}
}

function logOutAPI(){
    // return axios.post('/user/logout')
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
function signupAPI(){
    return axios.post('/api/signup')
}

function* signup(action){
    try{
        yield delay(1000)
        yield put({
            type:SIGN_UP_SUCCESS,
            data:action.data
        })
    }catch(err){
        yield put({
            type:SIGN_UP_FAILURE,
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


export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchSignup)
    ])
}