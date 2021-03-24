import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postsData = [
      {id: 1, message: 'Hi, how are you?', likes: '15'},
      {id: 2, message: "It's my first post!", likes: '25'},
      {id: 3, message: "Nah this shit sucks", likes: '2'},
      {id: 4, message: "Eat my shit", likes: '41'}
    ]

    let postsElements = postsData.map( post => <Post message = {post.message} likes = {post.likes} id = {post.id} />);

    return (
      <div className = {classes.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea>

            </textarea>
          </div>

          <div>
          <button>Add Post</button>
          </div>        
        </div>

        <div className = {classes.posts}>
          { postsElements }
        </div>

      </div>
    );
}

export default MyPosts;