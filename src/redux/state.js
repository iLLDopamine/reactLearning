import { rerenderEntireTree } from '../render'

let state = {

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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;