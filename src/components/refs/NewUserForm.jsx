import React, { useState } from "react";
import Input from "../components/ui/Input";
import Label from "../components/ui/Label";
import Button from "../components/ui/Button";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import styles from "./newUserForm.module.css";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // background: "#fff",
  },
  root: {
    // background: "purple",
    height: "100%",
    // overflow: "hidden",
  },
  item: {
    // background: "grey",
    margin: "0",
    opacity: "0.6",
    marginTop: "-10px",
  },
  btn: {
    marginBottom: "20px",
  },
}));

const NewUserForm = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setImage] = useState();

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

  const imageChangeHandler = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      name,
      age,
      sex,
      city,
      email,
      //   avatar,
    };

    const formData = new FormData();
    formData.append("user", JSON.stringify(user));
    formData.append("avatar", avatar);
    console.log("Hello USer");
    console.log(formData);
    fetch("http://localhost:4000/users/", {
      method: "POST",
      mode: "cors",
      body: formData,
      enctype: "multipart/form-data",
      headers: {
        // 'Authorization': 'Bearer my-token',
        // "Access-Control-Allow-Credentials": "true",
        //     "Content-Type": "application/x-www-form-urlencoded",
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Headers":
        //       "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        //     // "Access-Control-Request-Method": "*",
        //     // "Access-Control-Allow-Methods": "POST, PUT, DELETE, GET, OPTIONS",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <form id="userForm" className={`${classes.mainDiv} ${styles.div}`}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={8} className={classes.item}>
          <Label label="name">Name</Label>
          <Input type="text" onChange={nameChangeHandler} />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <Label label="age">Age</Label>
          <Input type="Number" onChange={ageChangeHandler} />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <Label label="sex">Sex</Label>
          <Input type="text" onChange={sexChangeHandler} />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <Label label="city">City</Label>
          <Input type="text" onChange={cityChangeHandler} />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <Label label="email">Email</Label>
          <Input type="email" onChange={emailChangeHandler} />
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <Label label="image">Image</Label>
          <Input type="file" onChange={imageChangeHandler} />
        </Grid>
      </Grid>
      <div className={classes.btn}>
        <Button onClick={submitHandler}>Submit</Button>
      </div>
    </form>
  );
};

export default NewUserForm;
