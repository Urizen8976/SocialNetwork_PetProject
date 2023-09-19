import { usersAPI } from "../api/api";
import { profileAPI } from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'Whats up, ma boy?', likesCount: 24 },
        { id: 3, message: 'Yo!', likesCount: 7 },
        { id: 4, message: 'Good' },
        { id: 5, message: 'Chill Out, ma boy' },
        { id: 6, message: 'Chill Out' }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

/* Before refactoring
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI
        .getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}*/
// After refactoring
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => (dispatch) => {
    let response = profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => (dispatch) => {
    //let response = profileAPI.updateStatus(status);
    //if (response.data.resultCode !== 0) {
        dispatch(setStatus(status));
    //}
}

export default profileReducer;