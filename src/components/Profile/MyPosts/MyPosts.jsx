import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    
    let postsElements = props.postsData.map(post => <Post message = { post.message } likes = { post.likes } id = { post.id } />);

    let newPostElement = React.createRef();

    let addPost = () => {
      let text = newPostElement.current.value;
      alert(text);
    }

    return (
      <div className = { classes.postsBlock }>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea ref = { newPostElement }>

            </textarea>
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