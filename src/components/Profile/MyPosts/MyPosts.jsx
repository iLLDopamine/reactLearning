import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {
    
    let postsElements = props.postsData.map(post => <Post message = { post.message } likes = { post.likes } id = { post.id } />);

    let newPostElement = React.createRef();

    let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
    }

    let onAddPost = () => {
      props.addPost();
    }

    return (
      <div className = { classes.postsBlock }>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref = { newPostElement } value = { props.newPostText } onChange = { onPostChange } />
          </div>

          <div>
          <button onClick = { onAddPost }>Add Post</button>
          </div>        
        </div>

        <div className = { classes.posts }>
          { postsElements }
        </div>

      </div>
    );
}

export default MyPosts;