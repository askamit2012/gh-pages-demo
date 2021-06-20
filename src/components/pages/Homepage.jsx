import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import styles from "./hompage.module.css";
import { useEffect, useState } from "react";
// import SingleUser from '../SingleUser'
import NewUserForm from "../forms/NewUserForm";
import { Portal } from "react-portal";

import React from "react";

const Homepage = (props) => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [userIsEditable, setUserIsEditable] = useState(false);

  useEffect(() => {}, [users]);

  const getData = () => {
    fetch("https://node---prac.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("All Data", data.result);
        const dataArr = data.result.map((user) => {
          return {
            name: user.name,
            age: user.age,
            sex: user.sex,
            city: user.city,
            email: user.email,
            avatar: user.avatar,
            id: user._id,
          };
        });
        setUsers(dataArr);
      })
      .catch((err) => console.log(err));
  };

  const getUsers = () => {
    if (!showUsers) {
      getData();
    }
    setShowUsers((prev) => !prev);
  };

  // const handleShowUsers = (e) => {
  //   setShowUsers((prev) => !prev);
  // };

  const handleUserDelete = (user) => {
    console.log(user);
    fetch(`https://node---prac.herokuapp.com/users/${user.id}`, {
      method: "DELETE",
    });
    getData();
  };

  const handleUserEdit = (user) => {
    console.log(user);
    setUserIsEditable(true);
  };

  return (
    <div style={styles.div}>
      {showUsers ? (
        <Button
          className={styles.btn1}
          onClick={getUsers}
          variant="contained"
          color="primary"
        >
          Click To Unsee!
        </Button>
      ) : (
        <Button
          className={styles.btn1}
          onClick={getUsers}
          variant="contained"
          color="primary"
        >
          Click To see!
        </Button>
      )}
      <IconButton
        onClick={props.handleUserAddForm}
        className={styles.btn2}
        color="primary"
        fontSize="large"
      >
        <AddIcon />
      </IconButton>
      {userIsEditable && <Portal>This is a Portal</Portal>}
      {console.log(typeof users, "getting data on click", users)}
      {showUsers &&
        users.map((user) => (
          <div className={styles.singleUser} key={Math.random()}>
            <div className={styles.dataHolder}>
              <span>{user.name}</span>
              <span>{user.age}</span>
              <span>{user.sex}</span>
              <span>{user.city}</span>
              <span>{user.email}</span>
              <div className={styles.cardIcons}>
                <IconButton
                  className={styles.editBtn}
                  onClick={() => handleUserEdit(user)}
                >
                  <EditIcon color="primary" />
                </IconButton>
                <IconButton
                  className={styles.deleteBtn}
                  onClick={() => handleUserDelete(user)}
                >
                  <DeleteForeverOutlinedIcon color="secondary" />
                </IconButton>
              </div>
            </div>
            <div className={styles.imageHolder}>
              <img
                src={user.avatar}
                className={styles.imgStyle}
                alt={user.name}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Homepage;
