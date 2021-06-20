import React from "react";
import styles from "./newUser.module.css";
import { makeStyles } from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Button,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    height: "100%",
  },
  label: {
    float: "left",
    justifyContent: "flex-start",
    margin: "10px 0",
  },
  input: {
    fontSize: "1.2rem",
    borderRadius: "5px",
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

const NewUser = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
      <form>
        <InputLabel
          htmlFor="name"
          className={`${classes.label} ${styles.labelEl}`}
        >
          Name
        </InputLabel>
        <Input
          id="name"
          type="text"
          className={`${classes.input} ${styles.inputEl}`}
        />
        <InputLabel htmlFor="age" className={classes.label}>
          Age
        </InputLabel>
        <Input id="age" type="Number" className={classes.input} />
        {/* <InputLabel htmlFor="sex">Sex</InputLabel>
        <Input id="sex"  /> */}
        <InputLabel id="demo-simple-select-label" className={classes.label}>
          Sex
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="sex"
          value="10"
          //   onChange={}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <InputLabel htmlFor="city" className={classes.label}>
          City
        </InputLabel>
        <Input id="city" className={classes.input} />
        <InputLabel htmlFor="email" className={classes.label}>
          Email
        </InputLabel>
        <Input id="email" className={classes.input} />
        <Button variant="contained" color="primary" className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewUser;
