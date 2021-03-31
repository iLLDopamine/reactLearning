import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {

        props.setUsers([
            {
                id: 1,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
                followed: false,
                fullName: "Kirill S.",
                status: "Help me",
                location: { city: "Zhigulyovsk", country: "Russia" },
            },
            {
                id: 2,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
                followed: true,
                fullName: "Danila S.", status: "I love pizza",
                location: { city: "Samara", country: "Russia" },
            },
            {
                id: 3,
                photoUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg",
                followed: false,
                fullName: "Vadim B.",
                status: "Working hard rn",
                location: { city: "Xep znaet", country: "Russia" },
            },
        ]);
    };

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;