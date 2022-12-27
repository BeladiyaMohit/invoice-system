import { Table } from "antd";
import React from "react";

const CustomTable = ({ data, columns }) => {
  return (
    <>
      <Table dataSource={data} columns={columns} />
    </>
  );
};

export default CustomTable;
