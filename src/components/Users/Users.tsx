import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/ava.png";
import {InitialStateType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
    usersPage: InitialStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    followingInProgress: number[]
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
                                 ? <button disabled={props.followingInProgress.some(id => id === el.id)}
                                           onClick={() => {
                                               props.unFollow(el.id)
                                           }}>Unfollow</button>
                                 : <button disabled={props.followingInProgress.some(id => id === el.id)}
                                           onClick={() => {
                                               props.follow(el.id)
                                           }}>Follow</button>
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

