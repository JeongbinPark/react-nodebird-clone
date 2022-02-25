import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../actions/types';
import produce from 'immer';

const initialState = {
  mainPosts:[{
    id: 1,
    User: {
      id: 1,
      nickname: "JB",
    },
    content: "첫 번째 게시글 #해시태그 #React",
    Images:[{
      src: "https://dummyimage.com/600x400/cdcdcd/fff.jpg&text=Test+Image+(600x400)"
    },{
      src: "https://dummyimage.com/300x200/cff2ff/000.jpg&text=Test+Image+(300x200)"
    }],
    Comments: [{
      User: {
        nickname: 'hello',
      },
      content: "반갑습니다."
    }, {
      User: {
        nickname: 'world',
      },
      content: "오랜만입니다."
    }]
  }],
  imagePaths:[],
  addPostLoading: false, addPostDone: false,  addPostError: null,
  removePostLoading: false, removePostDone: false,  removePostError: null,
  addCommentLoading: false, addCommentDone: false, addCommentError: null,
}

const dummyPost = (data) => ({
  id: data.id,
  content: data.data.text,
  User: {
    id: 1,
    nickname: "JB",
  },
  Images: [],
  Comments: []
})

const dummyComment = (data) => ({
  id: data.id,
  User: {
    id: data.data.userId,
    nickname: 'ABC',
  },
  content: data.data.commentText,
})

const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type){
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter((v)=> v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS:{
        const postIndex = draft.mainPosts.findIndex((v) => v.id === action.data.data.postId);
        draft.mainPosts[postIndex].Comments.unshift(dummyComment(action.data));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default: 
        break;
    }
  });

export default postReducer;