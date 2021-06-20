import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    width: "100%",
    shadows: "01",
  },
  mainContainer: {
    shadows: "10",
    background: "info",
  },
  mainItem: {
    background: theme.palette.primary.light,
  },
  avatarContainer: {},
  contentContainer: {
    // background: ,
  },
  avatarItem: {},
  avatar: {
    height: "128px",
    width: "128px",
    objectFit: "cover",
    shadows: "10",
  },
  contentItem: {
    justifyContent: "center",
  },
  typo: {
    fontSize: "22px",
    overflowX: "auto",
  },
}));

const Users = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    fetch("https://node---prac.herokuapp.com/users/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const usersArr = data.result.map((user) => ({
          name: user.name,
          age: user.age,
          sex: user.sex,
          city: user.city,
          email: user.email,
          avatarUrl: user.avatar,
        }));
        setUsers(usersArr);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Grid
      container
      spacing={4}
      justify="center"
      className={classes.mainContainer}
    >
      {users.map((user) => (
        <Grid item xs={12} className={classes.mainItem}>
          <Grid container justify="center" classeName={classes.avatarContainer}>
            <Grid item className={classes.avatarItem}>
              <Avatar
                className={classes.avatar}
                src={user.avatarUrl}
                alt={user.name}
              ></Avatar>
            </Grid>
          </Grid>
          <Grid container justify="center" className={classes.contentContainer}>
            <Grid item xs={12} className={classes.contentItem}>
              <Paper
                padding="10px"
                className={classes.paper}
                background="info"
                color="success"
              >
                <Typography
                  background="info"
                  color="primary"
                  className={classes.typo}
                >
                  {user.name}
                </Typography>
                <Typography className={classes.typo}>{user.age}</Typography>
                <Typography className={classes.typo}>{user.sex}</Typography>
                <Typography className={classes.typo}>{user.city}</Typography>
                <Typography className={classes.typo}>{user.email}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
