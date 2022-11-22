import {HYDRATE} from 'next-redux-wrapper';
import produce from 'immer'
import { BranchesOutlined } from '@ant-design/icons';




export const initialState={
    loginLoading:false,
    loginDone:false,
    loginError:null,

    logoutLoading:false,
    logoutDone:false,
    logoutError:null,

    signupLoading:false,
    signupDone:false,
    signupError:null,

    nicknameLoading:false,
    nicknameDone:false,
    nicknameError:null,

    me:null,
    signUpData:{},
    loginData:{}
}


const dummyUser=(data)=>{
return{
    ...data,
    nickname:'zerodong',
    id:1,
    Posts:[{id:1}],
    Followings:[],
    Followers:[]

}
}

export const NICKNAME_REQUEST = 'NICKNAME_REQUEST';
export const NICKNAME_SUCCESS='NICKNAME_SUCCESS'
export const NICKNAME_FAILURE = 'NICKNAME_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_FAILURE='SIGN_UP_FAILURE'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // 액션의 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; // 액션의 이름
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; // 액션의 이름

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_FAILURE='LOG_OUT_FAILURE'
export const LOG_OUT_SUCCESS='LOG_OUT_SUCCESS'

export const ADD_POST_TO_ME='ADD_POST_TO_ME'
export const REMOVE_POST_TO_ME='REMOVE_POST_TO_ME'


export const nicknameRequestAction=(data)=>{
    return{
        type:NICKNAME_REQUEST,
        data
    }
}

export const loginRequestAction = (data) => {
    return {
      type: LOG_IN_REQUEST,
      data,
    }
  };
  export const logoutRequestAction =()=> {
      return{
        type: LOG_OUT_REQUEST,

      }
  };
  export const signupRequestAction=(data)=>{
      return{
          type:SIGN_UP_REQUEST,
          data
      }
  }

export const reducer = (state=initialState,action)=>{

    return produce(state,(draft)=>{

        switch(action.type){
            case HYDRATE:
                console.log('HYDRATE',action)
                return{...state,...action.payload}
            case LOG_IN_REQUEST:
                   
                draft.loginLoading=true,
                draft.loginError=null;
                break;
                           
            case LOG_IN_SUCCESS:
                           draft.loginLoading=false,
                           draft.loginDone=true,
                           draft.me=dummyUser(action.data);
                           break;
                case LOG_IN_FAILURE:
                       
                            
                    draft.loginLoading=false,
                    draft.loginDone=false,
                    draft.loginError=action.err;
                    break;
                        
                
                
                case LOG_OUT_REQUEST:

                            draft.logoutLoading=true;
                            draft.logoutDone=false;
                            break;
                            
                    case LOG_OUT_SUCCESS:
                                draft.logoutLoading=false,
                                draft.logoutDone=true,
                                draft.me=null
                                break;
                        case LOG_OUT_FAILURE:
                                    draft.logoutDone=false,
                                    draft.logoutLoading=false,
                                    draft.logoutError=action.err;
                                    break;
                            
                case SIGN_UP_REQUEST:
                        
                        draft.signupLoading=true,
                        draft.signupDone=false,
                        draft.signupError=null;
                        break;
    
                    
                case SIGN_UP_SUCCESS:
                    
    
                        draft.signupLoading=false,
                        draft.signupDone=true;
                        break;
                        
                    
                case SIGN_UP_FAILURE:
                        
                        draft.signupError=action.err,
                        draft.signupLoading=false,
                        draft.signupDone=false;
                        break;
                
    
                    case NICKNAME_REQUEST:
                           
                            draft.nicknameLoading=true,
                            draft.nicknameDone=false,
                            draft.nicknameError=null;
                            break;
        
                        
                    case NICKNAME_SUCCESS:
                        
                            draft.nicknameLoading=false;
                            draft.nicknameDone=true;
                            break;
                        
                    case NICKNAME_FAILURE:
                            draft.nicknameError=action.err,
                            draft.nicknameLoading=false,
                            draft.nicknameDone=false;
                            break;
                        
                    case ADD_POST_TO_ME:
                        console.log(action.data,'sssss')
                        draft.me.Posts.unshift({id:action.data})
                        break;
                        // return{
                        //     ...state,
                        //     me:{
                        //         ...state.me,
                        //         Posts:[{id:action.data},...state.me.Posts],
                                
    
                        //     }
                        // }
                        case REMOVE_POST_TO_ME:
                            draft.me.Posts=draft.me.Posts.filter((m)=>m.id!==action.data)
                           break; 
                           
                        
                           
                        
                        
            default:
                return state;
        }
    
    })
    
    

}

export default reducer