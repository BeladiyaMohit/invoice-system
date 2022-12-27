import { Col, Dropdown, Row, Space, Tag } from "antd";
import React from "react";
import CustomCard from "../../components/Card/customCard";
import CustomTable from "../../components/Table";
import DashboardHeaderChild from "./dashboardHeaderChild";
import { EllipsisOutlined, PrinterOutlined } from "@ant-design/icons";

const DashboardPage = () => {
  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: 150,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 150,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: 150,
      render: (e) => {
        if (e === "expenditure") {
          return (
            <>
              <Tag className="expenditureTag">{e}</Tag>
            </>
          );
        } else {
          return (
            <>
              <Tag className="incomeTag">{e}</Tag>
            </>
          );
        }
      },
    },
  ];

  const items = [
    {
      label: (
        <div>
          <PrinterOutlined />
          <Space className="ml-10">Print</Space>
        </div>
      ),
      key: "0",
    },
      
  ];
  const data = [
    {
      key: "1",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "expenditure",
    },
    {
      key: "2",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "income",
    },
    {
      key: "3",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      type: "Other ",
      status: "expenditure",
    },
    {
      key: "5",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "income",
    },
    {
      key: "6",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "expenditure",
    },
    {
      key: "7",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "income",
    },
    {
      key: "8",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "expenditure",
    },
    {
      key: "9",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "income",
    },
    {
      key: "10",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "expenditure",
    },
    {
      key: "12",
      description: "John Brown",
      amount: "150121",
      date: "1/12/13",
      status: "income",
    },
  ];
  const DashboardChild = () => {
    return (
      <>
        <div className="common-expenditure-main">
          <CustomTable
            sticky={{ x: "calc(700px + 50%)", y: 240 }}
            data={data}
            columns={columns}
            rowClassName={"rowClass"}
            className={"mt-30"}
          />
        </div>
      </>
    );
  };
  return (
    <div className="dashboard">
      <Row>
        <Col xs={24} md={8}>
          <div className="m-20">
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
        <Col xs={24} md={8}>
          <div className="my-20">
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
        <Col xs={24} md={8}>
          <div className=" m-20">
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
          <Col xs={24} md={8}>
            <div className="mx-20">
              <CustomCard children={<></>} />
            </div>
          </Col>
          <Col xs={24} md={16}>
            <div className="dashboard-cardWrapper mr-20">
              <CustomCard
                extra={
                  <div onClick={() => {}}>
                    <Dropdown menu={{ items }} trigger={["click"]}>
                      <div onClick={(e) => e.preventDefault()}>
                        <EllipsisOutlined style={{ fontSize: "25px" }} />
                      </div>
                    </Dropdown>
                  </div>
                }
                title={"Latest Transactions"}
                className={"h-500"}
                children={<DashboardChild />}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardPage;
