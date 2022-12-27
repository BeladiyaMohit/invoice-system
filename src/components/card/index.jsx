import React from "react";
import { Row, Col, Card } from "antd";

const CustomCard = ({ title, className, children }) => {
  return (
    <div className={className}>
      <Card title={title}>{children}</Card>
    </div>
  );
};

export default CustomCard;
