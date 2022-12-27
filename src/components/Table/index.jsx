import { Table } from "antd";
import React from "react";

const CustomTable = ({ className, data, columns, loading, size="large",rowClassName , ...res }) => {
  return (
    <>
      <div className={className}>
        <Table
          dataSource={data}
          columns={columns}
          loading={loading}
          size={size}
          rowClassName={rowClassName}
          pagination={false}
          {...res}
        />
      </div>
    </>
  );
};

export default CustomTable;
