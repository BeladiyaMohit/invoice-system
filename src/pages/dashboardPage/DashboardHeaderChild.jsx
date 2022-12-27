import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const DashboardHeaderChild = ({
  title,
  currency,
  expe,
  statement,
  comment,
}) => {
  return (
    <div className="common-expenditure-main">
      <div className="common-expenditure-head">
        <Typography className="common-expenditure-title">{title}</Typography>
      </div>
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
        <Typography className="common-expenditure-comment c-gray">
          {comment && comment}
        </Typography>
      </div>
    </div>
  );
};

export default DashboardHeaderChild;
