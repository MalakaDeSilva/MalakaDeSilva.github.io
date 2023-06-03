import React, { useState } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
} from "react-floating-button-menu";
import MenuIcon from "@material-ui/icons/Menu";
import MdClose from "@material-ui/icons/Clear";
import DownloadIcon from "@material-ui/icons/GetApp";

import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

import cv from "../assets/Curriculum-Vitae.pdf";

function FabMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState(<WbSunnyOutlinedIcon />);

  // eslint-disable-next-line
  const changeTheme = () => {
    if (theme === "dark") {
      props.changeTheme();
      setTheme("light");
      setIcon(<WbSunnyOutlinedIcon color="inherit" />);
    } else {
      props.changeTheme();
      setTheme("dark");
      setIcon(<NightsStayOutlinedIcon htmlColor="white" />);
    }
  };

  return (
    <div>
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={8}
        isOpen={isOpen}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: 2,
        }}
      >
        <MainButton
          iconResting={<MenuIcon style={{ fontSize: 20 }} />}
          iconActive={<MdClose style={{ fontSize: 20 }} />}
          onClick={() => setIsOpen(!isOpen)}
          size={56}
        />
        <ChildButton icon={icon} size={40} onClick={changeTheme} />
        <ChildButton
          icon={<DownloadIcon style={{ fontSize: 20 }} />}
          size={40}
          onClick={() => window.location.replace(cv)}
        />
      </FloatingMenu>
    </div>
  );
}

export default FabMenu;
