import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"; 
import { NavLink } from "react-router-dom";



let User = ({user, followingInProgress, unfollow, follow}) => {
    return  <div className={styles.userContainer}>
   
        <span>
            <div >
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
                </NavLink>
                
            </div>
            <div>
                {user.followed 
                    ? <button className={styles.button} disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                        unfollow(user.id);
                       
                     } }>Unfollow</button>

                    : <button className={styles.button} disabled={followingInProgress.some(id => id === user.id)} onClick={ () => {
                        follow( user.id);
                       
                        } }>Follow</button>}
                
            </div>
        </span>
        <span>
            <span>
                <div className={styles.userName}>{user.name}</div>
                <div className={styles.userStatus}> {user.status} </div>
            </span>
           
        </span>
    </div>
}


export default User;