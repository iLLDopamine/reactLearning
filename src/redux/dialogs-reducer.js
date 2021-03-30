const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Kirill'},
        {id: 2, name: 'Jenek'},
        {id: 3, name: 'Diman'},
        {id: 4, name: 'Kolyan'}
    ],

    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yes!'}
    ],

    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 5, message: body}]
            };
        default:
            return state;
    }
} 

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })  
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;