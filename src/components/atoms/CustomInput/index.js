import { Input, Form } from "antd";
import React from "react";
import classes from "./styles.module.scss";
const CustomInput = (props) => {
  return (
    <>
      <Form.Item
        name={props.email}
        rules={props.rules}
        className={classes[props.styling]}
      >
        <Input {...props} className={classes.input} />
      </Form.Item>
    </>
  );
};

export const CustomInputPassword = (props) => {
  return (
    <Form.Item
      name={props.email}
      rules={props.rules}
      className={classes[props.styling]}
    >
      <Input.Password {...props} className={classes.input} />
    </Form.Item>
  );
};

export default CustomInput;
