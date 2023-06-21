import React from "react";
import logo from "../images/coffe.png";

function Topbar() {
  return (
    <div className="w-[1270px] h-[99px] flex justify-between absolute top-[34px] left-[49px] ">
      <div className="logo flex flex-row">
        <img src={logo} alt="logo" />
        <div className="flex items-center flex-row-reverse">
          <div className="text-right">
            <h1 className="font-main text-[24px]">IYA INI COFFE</h1>
            <h3 className="font-main text-[12px]">JANGAN LUPA NGOPI HARI INI NGAB</h3>
          </div>
        </div>
      </div>
      <div className="menu w-[412px] h-[20px] mt-[77px] mr-[121px]">
        <ul className="flex justify-between">
          <li className="font-main">COFFE</li>
          <li className="font-main">FRESH</li>
          <li className="font-main">CHOCHO</li>
          <li className="font-main">ICE</li>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
