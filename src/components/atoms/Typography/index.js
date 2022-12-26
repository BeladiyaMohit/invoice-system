import classes from "./styles.module.scss";
import React from "react";
import { Typography as TypographyComponent } from "antd";
const { Title } = TypographyComponent;

const Typography = ({ text, level }) => {
  return (
    <div>
      <Title className={classes.title} level={level}>
        {text}
      </Title>
    </div>
  );
};

export default Typography;
