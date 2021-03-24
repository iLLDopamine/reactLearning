import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts postsData = {props.state.postsData} />
      </div>
    );
}

export default Profile;