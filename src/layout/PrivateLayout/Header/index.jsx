import React from "react";
import styles from "./Header.module.scss";
import { Input } from "antd";
import {
  BellOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import MenuUnfoldOutlined from "@ant-design/icons/lib/icons/MenuUnfoldOutlined";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
const HeaderComponent = ({ collapsed, setCollapsed }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>logo</div>
      <div className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.menu}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <div className={styles.search}>
            <Input placeholder="Search" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.icon}>
            <BellOutlined />
            <GlobalOutlined />
            <SettingOutlined />
          </div>
          <div className={styles.userProfile}>
            <div className={styles.userImg}></div>
            <div className={styles.userInfo}>
              <div className={styles.userTitle}>userTitle</div>
              <div className={styles.userSubTitle}>userSubTitle</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
