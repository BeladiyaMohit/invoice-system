import { Typography } from "antd";
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const DashboardHeaderChild = ({
  title,
  expe,
  currency,
  statement,
  comment,
}) => {
  return (
    <>
      <div className="common-expenditure-main">
        <div className="pb-10">
          <Typography className="common-expenditure-title">{title}</Typography>
        </div>
        <div>{/* <CustomTable data={data} columns={columns} /> */}</div>
        <div className="common-expenditure-body">
          <Typography className="common-expenditure-content">
            {currency && currency}
          </Typography>
          <Typography className="common-expenditure-content">
            {expe ? expe.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0}
          </Typography>
          {statement && statement < 0 ? (
            <Typography className="common-expenditure-statementNegative">
              {statement}
              <ArrowDownOutlined style={{ margin: "5px" }} />
            </Typography>
          ) : (
            <Typography className="common-expenditure-statementPositive">
              {statement}
              <ArrowUpOutlined style={{ margin: "5px" }} />
            </Typography>
          )}
        </div>
        <div className="common-expenditure-footer">
          <Typography className="mt-10 c-gray">
            {comment && comment}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default DashboardHeaderChild;
