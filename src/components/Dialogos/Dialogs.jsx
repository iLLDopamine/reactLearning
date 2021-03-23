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

const Dialogs = (props) => {
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <DialogItem name = 'Kirill' id = '1' />
                <DialogItem name = 'Jenek' id = '2' />
                <DialogItem name = 'Diman' id = '3' />
                <DialogItem name = 'Kolyan' id = '4' />
            </div>

            <div className = {classes.messages}>
                <Message message = 'Hi' />
                <Message message = 'How are you?' />
                <Message message = 'Yo!' />
            </div>
        </div>
    );
}

export default Dialogs;