import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    
    let postsElements = props.postsData.map(post => <Post message = { post.message } likes = { post.likes } id = { post.id } />);

    let newPostElement = React.createRef();

    let onPostChange = () => {
      let text = newPostElement.current.value;
      let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
      props.dispatch(action);
    }

    let addPost = () => {
      props.dispatch({ type: 'ADD-POST' });
    }

    return (
      <div className = { classes.postsBlock }>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref = { newPostElement } value = { props.newPostText } onChange = { onPostChange } />
          </div>

          <div>
          <button onClick = { addPost }>Add Post</button>
          </div>        
        </div>

        <div className = { classes.posts }>
          { postsElements }
        </div>

      </div>
    );
}

export default MyPosts;