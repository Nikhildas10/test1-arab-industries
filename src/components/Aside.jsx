import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { ContactSupport, Extension, Menu, PowerSettingsNew, PsychologyAlt, Yard } from "@mui/icons-material";
const Aside = () => {
  const[show,setShow]=useState(true)
  const toggleSidebar=()=>{
    setShow(!show)
  }
  return (
     <>
        <div onClick={()=>toggleSidebar()}><Menu className="menuBar" style={{ fontSize: "35px" }}></Menu></div>
      <div className={show && "asideMain"}>
  
        <div className="profile">
          <img
            src="https://i.postimg.cc/qMPNbsFz/pexels-photo-220453.webp"
            alt=""
          />
          <p>Ram Mohan</p>
          <span>rammohan2@gmail.com</span>
        </div>
        <div className="menuButtons-wrapper">
          <div className="menuButtons">
            <button className="active">
              <DashboardIcon sx={{ color: "rgb(0, 106, 194)" }}></DashboardIcon>
              Dashboard
            </button>
            <button>
              <Yard sx={{ color: "rgb(0, 106, 194)" }}></Yard>Perks
            </button>
            <button>
              <Extension sx={{ color: "rgb(0, 106, 194)" }}></Extension>Addons
            </button>
            <button>
              <ContactSupport sx={{ color: "rgb(0, 106, 194)" }}></ContactSupport>
              FAQ
            </button>
            <button>
              <PsychologyAlt sx={{ color: "rgb(0, 106, 194)" }}></PsychologyAlt>
              Support
            </button>
          </div>
          <div className="logout">
            <button>
              Logout<PowerSettingsNew fontSize="10px"></PowerSettingsNew>
            </button>
          </div>
        </div>
      </div>
     </>
  );
};

export default Aside;
