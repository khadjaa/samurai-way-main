import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/ava.png'

class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            console.log(response)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {
                        pages.map((p, ind) =>
                            <span className={this.props.currentPage === p ? styles.selectedPage : styles.pages}
                                  onClick={() => {this.onPageChange(p)}}
                                  key={ind}
                            >{p}</span>)
                    }
                </div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.usersPage.users.map(el => {
                    return (
                        <div key={el.id}>
                     <span>
                         <div>
                             <img src={el.photos.small !== null ? el.photos.small : userPhoto} alt="avatar"
                                  className={styles.userAvatar}/>
                         </div>
                         <div>
                             {el.followed
                                 ? <button onClick={() => this.props.follow(el.id)}>Unfollow</button>
                                 : <button onClick={() => this.props.unFollow(el.id)}>Follow</button>
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
    }
}

export default Users