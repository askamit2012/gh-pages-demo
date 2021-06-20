import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={styles.main}>
      {props.children}
    </button>
  );
};

export default Button;
