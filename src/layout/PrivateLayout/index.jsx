import React from "react";
import HeaderComponent from "./Header";
import { Layout } from "antd";
import Sidebar from "./SideBar";
const { Header, Sider, Content } = Layout;

const PrivateLayout = ({ children }) => {
  return (
    <div>
      <Layout>
        <Header>
          <HeaderComponent />
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>
            {children}
            Private layout
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default PrivateLayout;
