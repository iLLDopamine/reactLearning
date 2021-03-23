import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add Post</button>
          <button>Remove</button>
        </div>

        <div className = {classes.posts}>
          <Post message = 'Hi, how are you?' likes = '15' />
          <Post message = "It's my first post!" likes = '25' />
        </div>

      </div>
    );
}

export default MyPosts;