import classes from './Profile.module.css';

const Profile = () => {
    return (
    <div className={classes.content}>
      <div>
        <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
      </div>

      <div>
        ava + description
      </div>

      <div>
        My posts
        <div>
          New post
        </div>

        <div className={classes.posts}>
          <div className={classes.item}>
            post 1
          </div>

          <div className={classes.item}>
            post 2
          </div>
        </div>

      </div>
    </div>
    );
}

export default Profile;