const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;