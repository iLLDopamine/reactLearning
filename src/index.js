import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: 'Hi, how are you?', likes: '15'},
  {id: 2, message: "It's my first post!", likes: '25'},
  {id: 3, message: "Nah this shit sucks", likes: '2'},
  {id: 4, message: "Eat my shit", likes: '41'}
]

let dialogsData = [
  {id: 1, name: 'Kirill'},
  {id: 2, name: 'Jenek'},
  {id: 3, name: 'Diman'},
  {id: 4, name: 'Kolyan'}
]


let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Yo!'},
  {id: 3, message: 'Yes!'}
]

ReactDOM.render(
  <React.StrictMode>
    <App postsData = { postsData } dialogsData = { dialogsData } messagesData = { messagesData } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
