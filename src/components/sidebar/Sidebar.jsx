import React from "react";
import "./sidebar.scss";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import AssessmentTwoToneIcon from "@mui/icons-material/AssessmentTwoTone";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import MonitorHeartTwoToneIcon from "@mui/icons-material/MonitorHeartTwoTone";
import PsychologyTwoToneIcon from "@mui/icons-material/PsychologyTwoTone";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">PugazhAdmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardTwoToneIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PeopleAltTwoToneIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreTwoToneIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartTwoToneIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingTwoToneIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentTwoToneIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveTwoToneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartTwoToneIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyTwoToneIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsTwoToneIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleTwoToneIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppTwoToneIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
