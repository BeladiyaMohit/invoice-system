import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { Layout, Menu } from "antd";
import { menuData } from "./SideBarData";
const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <div
      className={collapsed ? styles.sidebarCollapse : styles.sidebarContainer}
    >
      <Layout
        style={
          {
            // minHeight: "100vh",
          }
        }
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={menuData}
          />
        </Sider>
      </Layout>
    </div>
  );
};

export default Sidebar;
