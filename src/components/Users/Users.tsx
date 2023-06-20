import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/ava.png";
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((p, ind) =>
                        <span className={props.currentPage === p ? styles.selectedPage : styles.pages}
                              onClick={() => {
                                  props.onPageChange(p)
                              }}
                              key={ind}
                        >{p}</span>)
                }
            </div>
            {props.usersPage.users.map(el => {
                return (
                    <div key={el.id}>
                     <span>
                         <NavLink to={'/profile/' + el.id}>
                             <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"
                                  className={styles.userAvatar}/>
                         </NavLink>
                         <div>
                             {el.followed
                                 ? <button onClick={() => {
                                     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,
                                         {
                                             withCredentials: true,
                                             headers: {
                                                 'API-KEY' : 'ec578b22-e0ab-48ce-86ed-f73094d8dad1'
                                             }
                                         })
                                         .then(res => {
                                             if (res.data.resultCode === 0) {
                                                 props.unFollow(el.id)
                                             }
                                         })
                                 }
                                 }>Unfollow</button>
                                 : <button onClick={() => {
                                     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},
                                         {
                                             withCredentials: true,
                                             headers: {
                                                 'API-KEY' : 'ec578b22-e0ab-48ce-86ed-f73094d8dad1'
                                             }
                                         })
                                         .then(res => {
                                             if (res.data.resultCode === 0) {
                                                 props.follow(el.id)
                                             }
                                         })
                                 }
                                 }>Follow</button>
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
            })
            }
        </div>
    );
};

