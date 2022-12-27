import React from "react";
import { Card } from "antd";

const ExpencePage = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "60%",
        }}
      >
        <Card
          style={{
            backgroundColor: "grey",
            height: "100%",
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          flexWrap: "wrap",

          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <Card
          style={{
            width: "47%",
            // minWidth:"50%",
            backgroundColor: "grey",
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          style={{
            width: "47%",
            // minWidth:"50%",
            backgroundColor: "grey",
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          style={{
            width: "47%",
            // minWidth:"50%",
            backgroundColor: "grey",
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          style={{
            width: "47%",
            // minWidth:"50%",
            backgroundColor: "grey",
          }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
};

export default ExpencePage;
