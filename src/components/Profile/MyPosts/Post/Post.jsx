import classes from './Post.module.css';

const Post = () => {
    return (
          <div className={classes.item}>
            <img src='https://img5.goodfon.com/wallpaper/nbig/9/d4/kot-britanets-belyi-pushistyi-ochki.jpg' />post 1
            <div>
              <span>Like</span>
            </div>
          </div>
          
    );
}

export default Post;