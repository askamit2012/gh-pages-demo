import styles from './singleUser.module.css';

import React from 'react'

const SingleUser = (props) => {
    // const [name, age, sex, city, email, avatar] = props.user
    console.log(props.user)
    return (
        <div className={styles.singleUser}>
            <span>{props.user.newUser.name}</span>
            <span>{props.user.newUser.age}</span>
            <span>{props.user.newUser.sex}</span>
            <span>{props.user.newUser.city}</span>
            <span>{props.user.newUser.email}</span>
            <img src={props.user.newUser.avatar} className={styles.imgStyle} alt={props.user.name} />
            </div>
    )
}

export default SingleUser
