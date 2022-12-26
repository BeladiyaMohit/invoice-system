import { PieChartOutlined } from "@ant-design/icons";
import React from "react";
import DesktopOutlined from "@ant-design/icons/lib/icons/DesktopOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import TeamOutlined from "@ant-design/icons/lib/icons/TeamOutlined";
import FileOutlined from "@ant-design/icons/lib/icons/FileOutlined";

export const menuData = [
  {
    key: 1,
    label: "Option 1",
    route: "",
    icon: <PieChartOutlined />,
  },
  {
    key: 2,
    label: "Option 2",
    icon: <DesktopOutlined />,
  },
  {
    key: 3,
    label: "User",
    icon: <UserOutlined />,
    children: [
      {
        key: 3.1,
        label: "Tom",
      },
      {
        key: 3.2,
        label: "Bill",
      },
      {
        key: 3.3,
        label: "Alex",
      },
    ],
  },
  {
    key: 4,
    label: "Team",
    icon: <TeamOutlined />,
    children: [
      {
        key: 4.1,
        label: "Team 1",
      },
      {
        key: 4.2,
        label: "Team 2",
      },
      {
        key: 4.3,
        label: "Team 3 ",
      },
    ],
  },
  {
    key: 4,
    label: "Files",
    icon: <FileOutlined />,
  },
];
