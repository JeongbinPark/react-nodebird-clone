import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../actions/types';

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
  addCommentLoading: false, addCommentDone: false, addCommentError: null,
}

const dummyPost = {
  id: 2,
  content: 'Dummy Post.',
  User: {
    id: 1,
    nickname: "JB",
  },
  Images: [],
  Comments: []
}

const postReducer = ((state = initialState, action)=> {
  switch (action.type){
    case ADD_POST_REQUEST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: true,
        addPostError: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      };
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentError: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      };
    default: return state;
  }
});

export default postReducer;