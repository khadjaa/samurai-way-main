import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/ava.png'
const Users = (props: UsersPropsType) => {

    const getUsers = () => {
        if (props.users.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.users.map(el => {
                return (
                    <div key={el.id}>
                     <span>
                         <div>
                             <img src={el.photos.small !== null ? el.photos.small : userPhoto } alt="avatar" className={styles.userAvatar}/>
                         </div>
                         <div>
                             {el.followed
                                 ? <button onClick={() => props.follow(el.id)}>Unfollow</button>
                                 : <button onClick={() => props.unFollow(el.id)}>Follow</button>
                             }
                         </div>
                     </span>
                        <span>
                         <span>
                             <div>{el.name}</div>
                             <div>{el.status}</div>
                         </span>
                         <span>
                             <div>{'el.location.county'}</div>
                             <div>{'el.location.city'}</div>
                         </span>
                     </span>
                    </div>
                )
            })}
        </div>
    );
};

