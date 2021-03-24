import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className = {`${classes.dialog} ${classes.active}`}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className = {classes.message}>{props.message}</div>
    );
}

let dialogsData = [
    {id: 1, name: 'Kirill'},
    {id: 2, name: 'Jenek'},
    {id: 3, name: 'Diman'},
    {id: 4, name: 'Kolyan'}
]

let dialogsElements = dialogsData.map( dialog => <DialogItem name = {dialog.name} id = {dialog.id} /> );

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo!'},
    {id: 3, message: 'Yes!'}
]

let messagesElements = messagesData.map( message => <Message message = {message.message} id = {message.id} /> );

const Dialogs = (props) => {
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                { dialogsElements }
            </div>

            <div className = {classes.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;