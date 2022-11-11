import React from "react";
import "./widget.scss";
import ArrowDropUpTwoToneIcon from "@mui/icons-material/ArrowDropUpTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import AccountBalanceWalletTwoToneIcon from "@mui/icons-material/AccountBalanceWalletTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MonetizationOnTwoToneIcon from "@mui/icons-material/MonetizationOnTwoTone";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See All Users",
      icon: (
        <PersonOutlineTwoToneIcon
          className="icon"
          style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
        />
      ),
    };
  } else if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "View All Orders",
      icon: (
        <ShoppingCartTwoToneIcon
          className="icon"
          style={{
            color: "goldenrod",
            backgroundColor: "rgba(218,165,32,0.2)",
          }}
        />
      ),
    };
  } else if (type === "earning") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View Net Earnings",
      icon: (
        <MonetizationOnTwoToneIcon
          className="icon"
          style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
        />
      ),
    };
  } else if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See Details",
      icon: (
        <AccountBalanceWalletTwoToneIcon
          className="icon"
          style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
        />
      ),
    };
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ArrowDropUpTwoToneIcon />
          <ArrowDropDownTwoToneIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
