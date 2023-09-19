import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";


let state = {
    posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'Whats up, ma boy?', likesCount: 24 },
        { id: 3, message: 'Yo!', likesCount: 7 },
        { id: 4, message: 'Good' },
        { id: 5, message: 'Chill Out, ma boy' },
        { id: 6, message: 'Chill Out' }
    ]
};


it('length of posts should be incremented', () => {
    // 1. Test data
    let action = addPostActionCreator("Thank you!");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(7);
});


it('message of new post should be correct', () => {
    // 1. Test data
    let action = addPostActionCreator("Thank you!");

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts[6].message).toBe("Thank you!");
});


it('after deleting length of messages should be decrement', () => {
    // 1. Test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});


it('after deleting length should not be decrement if id is incorrect', () => {
    // 1. Test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(6);
});