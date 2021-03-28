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
                {id: 3, message: 'Yes!'}
            ]
        },
    
        sidebar: {
            
        }
    },

    getState() {
        debugger;
        return this._state;
    },

    _callSubscriber () {
        console.log('The state has been changed')
    },

    addPost () {
        debugger;
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        };
    
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    }
}


export default store;
window.store = store;