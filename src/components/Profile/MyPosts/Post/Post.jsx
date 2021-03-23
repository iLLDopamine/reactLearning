import classes from './Post.module.css';

const Post = (props) => {
    return (
          <div className = {classes.item}>
            <img src = 'https://img5.goodfon.com/wallpaper/nbig/9/d4/kot-britanets-belyi-pushistyi-ochki.jpg' />
            { props.message }
            <div>
              { props.likes }
              <span> Like</span>
            </div>
          </div>
          
    );
}

export default Post;