const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {

        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likes: '15'},
                {id: 2, message: "It's my first post!", likes: '25'},
                {id: 3, message: "Nah this shit sucks", likes: '2'},
                {id: 4, message: "Eat my shit", likes: '41'},
                {id: 5, message: "Eat my shit too!", likes: '19'}
            ],
    
            newPostText: 'iLLDopamine'
        },
    
        dialogsPage: {
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
        },
    
        sidebar: {
            
        }
    },
    _callSubscriber () {
        console.log('The state has been changed')
    },


    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },


    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
    
}

export const addPostActionCreator = () => ({ type: ADD_POST })  
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })  
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;
window.store = store;