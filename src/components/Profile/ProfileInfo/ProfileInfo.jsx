import classes from './ProfileInfo.module.css';
import React from 'react';

const ProfileInfo = (props) => {
    return (
    <div>
      <div>
        <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg' />
      </div>

      <div className = {classes.descriptionBlock}>
        ava + description
      </div>

    </div>
    );
}

export default ProfileInfo;