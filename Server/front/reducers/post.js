import {HYDRATE} from 'next-redux-wrapper';
import shortId from 'shortid'
import produce from 'immer'


export const initialState={
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname:'동영'
        },
        content:'첫 번째 게시글 #해시태그 #익스프레스',
        Images:[{
            src:'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png'
        },{
            src:'https://byline.network/wp-content/uploads/2018/05/cat.png'
        }
    
        ],
        Comments:[
            {
             User:{
                 nickname:'ji'
             },
             content:'사고싶어요'
            }
        ]
    
    }],
    imagePaths:[],
    addpostLoading:false,
    addpostDone:false,
    addpostError:null,

    removepostLoading:false,
    removepostDone:false,
    removepostError:null,

    addcommentLoading:false,
    addcommentDone:false,
    addcommentError:null,

    loadPostLoading:false,
    loadPostDone:false,
    loadPostError:null,
}


export const ADD_POST_REQUEST='ADD_POST_REQUEST'; 
export const ADD_POST_SUCCESS='ADD_POST_SUCCESS';
export const ADD_POST_FAILURE='ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST='ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS='ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE='ADD_COMMENT_FAILURE';

export const REMOVE_POST_REQUEST='REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS='REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE='REMOVE_POST_FAILURE';

export const LOAD_POST_REQUEST='LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS='LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE='LOAD_POST_FAILURE';



export const addpostRequestAction=(data)=>{
   return{
    type:ADD_POST_REQUEST,
    data
   }
}

export const addcommentRequestAction=(data)=>{
    return{
        type:ADD_COMMENT_REQUEST,
        data
    }
}

export const reducer = (state=initialState,action)=>{
    
    return produce(state,(draft)=>{
        switch(action.type){

            case HYDRATE:
                console.log('HYDRATE',action)
                return{...state,...action.payload}
            case ADD_POST_REQUEST:
                draft.addpostDone=false
                draft.addpostLoading=true
                draft.addpostError=null
                break;
            case ADD_POST_SUCCESS:
                draft.mainPosts.unshift(action.data)
                draft.addpostDone=true
                draft.addpostLoading=false
                break;
            case ADD_POST_FAILURE: 
                draft.addpostDone=false
                draft.addpostLoading=false
                draft.addpostError=action.error
                break;
                case ADD_COMMENT_REQUEST:    
                draft.addcommentLoading=true;
                draft.addcommentDone=false;
                draft.addcommentError=null
                break;
                case ADD_COMMENT_SUCCESS:{
                draft.addcommentDone=true;
                draft.addcommentLoading=false;
                const post =draft.mainPosts.find((v)=>v.id===action.data.PostId);
                post.Comments.push(action.data);
                break;
                    // const postIndex =state.mainPosts.findIndex((v)=>v.id===action.data.postId);
                    // const post ={...state.mainPosts[postIndex]};
                    // post.Comments=[dummyComment(action.data.content),...post.Comments];
                    // const mainPosts=[...state.mainPosts];
                    // mainPosts[postIndex]=post
                    // return{
                    //     ...state,
                    //     mainPosts,
                    //     addcommentDone:true,
                    //     addcommentLoading:false,
                    // }
                }
                case ADD_COMMENT_FAILURE:
                    
                        draft.addcommentDone=false
                        draft.addcommentLoading=false
                        draft.addcommentError=action.err;
                        break;
                    
                case REMOVE_POST_REQUEST:
                        draft.removepostDone=false;
                        draft.removepostLoading=true;
                        draft.removepostError=null
                        break;
                        
                case REMOVE_POST_SUCCESS:{

                        draft.removepostDone=true;
                        draft.removepostLoading=false;
                        // draft.mainPosts=draft.mainPosts.filter((m)=>m.id!==action.data)
                        draft.mainPosts=action.data
                        break
                    }
                case REMOVE_POST_FAILURE:
                    draft.removepostDone=false;
                    draft.removepostLoading=false;
                    draft.removepostError=action.error;
                    break;

                case LOAD_POST_REQUEST:
                    draft.loadPostDone=false;
                    draft.loadPostLoading=true;
                    draft.loadPostError=null;
                    break;

                case LOAD_POST_SUCCESS:
                    draft.loadPostDone=true;
                    draft.loadPostLoading=false;
                    draft.mainPosts=action.data;
                    break;
                case LOAD_POST_FAILURE:
                    draft.loadPostDone=false;
                    draft.loadPostLoading=false;
                    draft.loadPostError=action.error;
                    break;
            default:
                return state;
        }    });

   

}

export default reducer