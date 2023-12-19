import { ArrowDown, ChevronDown } from 'feather-icons-react/build/IconComponents';
import React from 'react'
const Header = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <img
          className="headerLogo"
          src="https://i.postimg.cc/MHj5qrTB/2b4c4134c7da52a5e4d56a6dabcaf1a8-removebg-preview.png"
          alt=""
        />
      </div>
      <div className='companyName-wrapper'>
        <div className='companyName'>
          <img src="https://i.postimg.cc/R01xtDqQ/XYZ-1.webp" alt="" />
          XYZ Enterprises Pvt.Ltd
        </div>
        <button><ChevronDown></ChevronDown></button>
      </div>
    </div>
  );
}

export default Header