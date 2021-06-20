import React from "react";
import styles from "./label.module.css";

const Label = (props) => {
  return (
    <label className={styles.label} htmlFor={props.label}>
      {props.children}
    </label>
  );
};

export default Label;
