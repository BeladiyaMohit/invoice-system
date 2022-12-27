import { Col, Row, Typography } from "antd";
import React from "react";
import CustomCard from "../../components/card";
import "../dashboardPage/dashboardPage.scss";
import DashboardHeaderChild from "./DashboardHeaderChild";

const DashboardPage = () => {
  const DashboardChild=({title,})=>{
    return(
      <>
       <div className="common-expenditure-main">
      <div className="common-expenditure-head">
        <Typography className="common-expenditure-title">{title}</Typography>
      </div>
      {/* <div className="common-expenditure-body">
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
      </div> */}
    </div>
      </>
    )
  }
  return (
    <>
      <Row>
        <Col xs={24} md={8} >
          <div className="dashboard-cardWrapper">
            <CustomCard
              children={
                <DashboardHeaderChild
                  title={"Income"}
                  currency={"$"}
                  expe={"15155"}
                  comment={"Compare to last year (2019)"}
                  statement={15}
                />
              }
            />
          </div>
        </Col>
        <Col xs={24} md={8} >
          <div className="dashboard-cardWrapper">
            <CustomCard
              children={
                <DashboardHeaderChild
                  title={"Expenditure"}
                  currency={"$"}
                  expe={"9155"}
                  comment={"Compare to last year (2019)"}
                  statement={-156}
                />
              }
            />
          </div>
        </Col>
        <Col xs={24} md={8} >
          <div className="dashboard-cardWrapper">
            <CustomCard
              children={
                <DashboardHeaderChild
                  title={"Total"}
                  currency={"$"}
                  expe={""}
                  comment={"Compare to last year (2019)"}
                  statement={15}
                />
              }
            />
          </div>
        </Col>
      </Row>
      <div className="dashboard-mid">
        <Row>
          <Col xs={24} md={12}>
            <div className="dashboard-cardWrapper">
              <CustomCard
                children={
                  <DashboardChild
                    title={"Expenditure Source"}
                    
                  />
                }
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardPage;
