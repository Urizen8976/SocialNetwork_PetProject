import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi', likesCount: 12 },
        { id: 2, message: 'Whats up, ma boy?', likesCount: 24 },
        { id: 3, message: 'Yo!', likesCount: 7 },
        { id: 4, message: 'Good' },
        { id: 5, message: 'Chill Out, ma boy' },
        { id: 6, message: 'Chill Out' }
      ],
      newPostText: 'it-kamasutra'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Whats up, ma boy?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Good' },
        { id: 5, message: 'Chill Out, ma boy' },
        { id: 6, message: 'Chill Out!' }
      ],
      dialogs: [
        { id: 1, name: 'Timur' },
        { id: 2, name: 'Arina' },
        { id: 3, name: 'Tatiana' },
        { id: 4, name: 'Bayer' },
        { id: 5, name: 'Alex' },
        { id: 6, name: 'Alexey' }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;
export default store;