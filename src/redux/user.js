import * as requestUtils from '../utils/request';
import * as arrayUtils from '../utils/array';

// Action Types

const actionTypes = {
  FETCH_LIST: {
    START: 'app/user/fetchList/start',
    SUCCESS: 'app/user/fetchList/success',
    FAILURE: 'app/user/fetchList/failure',
  },
  FETCH_POSTS: {
    START: 'app/user/fetchUser/start',
    SUCCESS: 'app/user/fetchUser/success',
    FAILURE: 'app/user/fetchUser/failure',
  },
};

// Action Creators

export const fetchListStart = () => ({
  type: actionTypes.FETCH_LIST.START,
});

export const fetchListSuccess = list => ({
  type: actionTypes.FETCH_LIST.SUCCESS,
  list,
});

export const fetchListFailure = error => ({
  type: actionTypes.FETCH_LIST.FAILURE,
  error,
});

export const fetchUserPostsStart = id => ({
  type: actionTypes.FETCH_POSTS.START,
  id,
});

export const fetchUserPostsSuccess = posts => ({
  type: actionTypes.FETCH_POSTS.SUCCESS,
  posts,
});

export const fetchUserPostsFailure = error => ({
  type: actionTypes.FETCH_POSTS.FAILURE,
  error
});

export const fetchUserList = () => (
  (dispatch, getState) => {
    dispatch(fetchListStart());
    requestUtils.requestJson('https://jsonplaceholder.typicode.com/users')
      .then(list => dispatch(fetchListSuccess(arrayUtils.getRandom(list, 3))))
      .catch(error => dispatch(fetchListFailure(error)))
  }
);

export const fetchUserPosts = id => (
  (dispatch, getState) => {
    dispatch(fetchUserPostsStart(id));
    requestUtils.requestJson(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(list => dispatch(fetchUserPostsSuccess(arrayUtils.getRandom(list, 5))))
      .catch(error => dispatch(fetchUserPostsFailure(error)))
  }
);


const initialState = {
  isRequesting: false,
  error: null,
  users: [],
  currentUserId: null,
  currentPosts: []
};

const handlers = {
  [actionTypes.FETCH_LIST.START] : () => ({
    isRequesting: true,
  }),
  [actionTypes.FETCH_LIST.SUCCESS] : (payload) => ({
    isRequesting: false,
    users: payload.list,
  }),
  [actionTypes.FETCH_LIST.FAILURE] : (payload) => ({
    isRequesting: false,
    error: payload.error,
  }),
  [actionTypes.FETCH_POSTS.START] : (payload) => ({
    isRequesting: true,
    currentUserId: payload.id,
  }),
  [actionTypes.FETCH_POSTS.SUCCESS] : (payload) => ({
    isRequesting: false,
    currentPosts: payload.posts,
  }),
  [actionTypes.FETCH_POSTS.FAILURE] : (payload) => ({
    isRequesting: false,
    error: payload.error,
  }),
};


const reducer = (state = initialState, action) => {
  const { type, ...payload } = action;

  if (!handlers[type]) {
    return state;
  }

  return {
    ...state,
    ...handlers[type](payload),
  };
}

export default reducer;
