import React, { useState } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styles from "./newUserForm.module.css";

const NewUserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const sexChangeHandler = (e) => {
    setSex(e.target.value);
  };

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const avatarChangeHandler = (e) => {
    console.log(e.target);
    setAvatar(e.target.files[0]);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      name,
      age,
      sex,
      city,
      email,
      //   avatar,
    };
    console.log(user);
    const formData = new FormData();
    formData.append("user", JSON.stringify(user));
    formData.append("avatar", avatar);
    fetch("https://node---prac.herokuapp.com/users/", {
      body: formData,
      method: props.method,
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    props.handleCloseForm();
  };

  return (
    <div className={styles.mainDiv}>
      <header className={styles.header}>
        <h2>Add New User!</h2>
        <button onClick={props.handleCloseForm}>X</button>
      </header>
      <form className={styles.userForm} onSubmit={formSubmitHandler}>
        <Label>Name</Label>
        <Input type="text" onChange={nameChangeHandler} />
        <Label>Age</Label>
        <Input type="Number" onChange={ageChangeHandler} />
        <Label>Sex</Label>
        <Input type="text" onChange={sexChangeHandler} />
        <Label>City</Label>
        <Input type="text" onChange={cityChangeHandler} />
        <Label>Email</Label>
        <Input type="email" onChange={emailChangeHandler} />
        <Label>Image</Label>
        <Input type="file" onChange={avatarChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
};

export default NewUserForm;
