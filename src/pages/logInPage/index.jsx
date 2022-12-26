import React from "react";
import classes from "./styles.module.scss";
import { Row, Col } from "antd";
import LoginForm from "./component/LoginForm";

const LogInPage = () => {
  return (
    <div className={classes.container}>
      <Row className={classes.row} justify="center">
        <Col span={12} className={classes.leftSection}>
          <div className={classes.section}>
            <div className={classes.form}>
              <h1>Sign In</h1>
              <LoginForm />
            </div>
          </div>
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

export default LogInPage;
