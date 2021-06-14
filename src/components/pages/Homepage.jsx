import { Button } from '@material-ui/core';
import styles from './hompage.module.css'
import {useEffect, useState} from 'react'
// import SingleUser from '../SingleUser'

import React from 'react'

const Homepage = () => {

    const [users, setUsers] = useState([])
    const [showUsers, setShowUsers] = useState(false)

    useEffect(() =>{
        
    },[])

    

    const getUsers =  () => {
        fetch('https://node---prac.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
            console.log("All Data",data.result)
            const dataArr = data.result.map(user => {
                return {
                    name: user.name,
                    age: user.age,
                    sex: user.sex,
                    city: user.city,
                    email: user.email,
                    avatar: user.avatar
                }
            })
            setUsers(dataArr)
        })
        .catch(err => console.log(err))
        setShowUsers(true)
        
    }

    return (
        <div style={styles.div}>
            <Button onClick={getUsers} variant="contained" color='primary'>Click To see!</Button>
            {console.log(typeof users,'getting data on click', users)}
            {showUsers &&
                users.map((user => <div className={styles.singleUser} key={Math.random()}>
                    <span>{user.name}</span>
                    <span>{user.age}</span>
                    <span>{user.sex}</span>
                    <span>{user.city}</span>
                    <span>{user.email}</span>
                    <img src={user.avatar} className={styles.imgStyle} alt={user.name} />
                    </div>))
            }
            {/* <SingleUser /> */}
        </div>
    )
}

export default Homepage
