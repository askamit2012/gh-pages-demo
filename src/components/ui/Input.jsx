import React from "react";
import styles from "./input.module.css";

const Input = (props) => {
  //   const styles = {
  //     root: {
  //       border: "1px solid purple",
  //     },
  //   };
  return (
    <input
      onChange={props.onChange}
      className={styles.main}
      type={props.type}
    />
  );
};

export default Input;
