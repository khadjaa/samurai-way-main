import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './Users.module.css'
export const Users = (props: UsersPropsType) => {

   if(props.users.users.length === 0){
       props.setUsers([
           {id: 1, photoUrl: 'https://www.film.ru/sites/default/files/filefield_paths/aanganim.jpg', followed: false, fullName: 'Dima', status: 'I am a boss', location: {city: 'Minsk', county: 'Belarus'}},
           {id: 2, photoUrl: 'https://www.film.ru/sites/default/files/filefield_paths/aanganim.jpg', followed: true, fullName: 'Lex', status: 'I am so pretty', location: {city: 'Saint-Petersburg', county: 'Russia'}},
           {id: 3, photoUrl: 'https://www.film.ru/sites/default/files/filefield_paths/aanganim.jpg', followed: true, fullName: 'Anya', status: 'I like this game', location: {city: 'Khujand', county: 'Tajikistan'}},
       ])
   }

    return (
     <div>
         {props.users.users.map(el=> {
             return(
                 <div key={el.id}>
                     <span>
                         <div>
                             <img src={el.photoUrl} alt="avatar" className={styles.userAvatar}/>
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
                             <div>{el.fullName}</div>
                             <div>{el.status}</div>
                         </span>
                         <span>
                             <div>{el.location.county}</div>
                             <div>{el.location.city}</div>
                         </span>
                     </span>
                 </div>
             )
         })}
     </div>
    );
};

