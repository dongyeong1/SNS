import { actionChannel, all, delay, fork, put, takeLatest,call} from 'redux-saga/effects'


import postSaga from './post'
import userSaga from './user'

export default function* rootSaga(){
    yield all([
        fork(postSaga),
        fork(userSaga)
    ])
}