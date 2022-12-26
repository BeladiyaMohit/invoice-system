import React from "react";
import CustomButton from "../../../../components/atoms/CustomButton";

import { Form } from "antd";
import classes from "./styles.module.scss";
import CustomInput, {
  CustomInputPassword,
} from "../../../../components/atoms/CustomInput";
import AuthLayout from "../../../../layout/AuthLayout";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={classes.container}>
      <AuthLayout>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={classes.form}
        >
          {/* <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
            className={classes.inputBox}
          >
            <CustomInput placeholder="Email" />
          </Form.Item> */}
          <CustomInput
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
            type="text"
            placeholder="Email"
            styling="inputBox"
          />
          <CustomInputPassword
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            type="password"
            placeholder="Password"
            styling="password"
          />

          {/* <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className={classes.password}
          >
            <CustomInputPassword placeholder="Password" />
          </Form.Item> */}

          <div className={classes.forget}>
            <a href="/" className={classes.forgetPassword}>
              Forget Password?
            </a>
          </div>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <CustomButton>Sign In</CustomButton>
            <div>
              <p className={classes.member}>
                Not a Member yet?&nbsp;
                <a href="/" className={classes.signUp}>
                  Sign Up
                </a>
              </p>
            </div>
          </Form.Item>
        </Form>
      </AuthLayout>
    </div>
  );
};

export default LoginForm;
