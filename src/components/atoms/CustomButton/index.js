import React from "react";
import { Button } from "antd";
import classes from "./styles.module.scss";
const CustomButton = (props) => {
  return (
    <div className={classes.button}>
      <Button type="primary" block className={classes.btn} size="large">
        {props.children}
      </Button>
    </div>
  );
};

export default CustomButton;
