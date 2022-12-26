import React, { useState } from "react";
import HeaderComponent from "./Header";
import { Layout } from "antd";
import Sidebar from "./SideBar";
const { Header, Sider, Content } = Layout;

const PrivateLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout>
        <Header>
          <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
        </Header>
        <Layout>
          <Sider>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
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
