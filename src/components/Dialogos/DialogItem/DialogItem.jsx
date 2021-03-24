import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';
import React from 'react';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className = {`${classes.dialog} ${classes.active}`}>
            <img src = 'https://img5.goodfon.com/wallpaper/nbig/9/d4/kot-britanets-belyi-pushistyi-ochki.jpg' />
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;