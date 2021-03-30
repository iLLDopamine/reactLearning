import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPostsContainer store = {props.store} />
      </div>
    );
}

export default Profile;