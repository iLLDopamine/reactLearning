import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

const Profile = (props) => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts postsData = {props.profilePage.postsData}
                 addPost = {props.addPost}
                 newPostText = {props.profilePage.newPostText} 
                 updateNewPostText = {props.updateNewPostText}
        />
      </div>
    );
}

export default Profile;