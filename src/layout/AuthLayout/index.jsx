import React from "react";
import { Layout } from "antd";
import classes from "./styles.module.scss";

const { Footer, Content } = Layout;

const AuthLayout = (props) => {
  return (
    <Layout className={classes.layout}>
      <Content className={classes.content}>{props.children}</Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default AuthLayout;

