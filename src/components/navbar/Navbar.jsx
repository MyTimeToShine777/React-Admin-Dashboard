import React, { useContext } from "react";
import "./navbar.scss";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import FullscreenExitTwoToneIcon from "@mui/icons-material/FullscreenExitTwoTone";
import NotificationsActiveTwoToneIcon from "@mui/icons-material/NotificationsActiveTwoTone";
import QuestionAnswerTwoToneIcon from "@mui/icons-material/QuestionAnswerTwoTone";
import ListAltTwoToneIcon from "@mui/icons-material/ListAltTwoTone";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchTwoToneIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageTwoToneIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeTwoToneIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsActiveTwoToneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <QuestionAnswerTwoToneIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltTwoToneIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://res.cloudinary.com/drplxcnzd/image/upload/v1656699754/samples/people/smiling-man.jpg"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
