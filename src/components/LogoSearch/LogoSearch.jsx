import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
import Logo from "../../img/Logo.png";

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo}></img>
      <div className="Search">
        <input type="text" placeholder="#Explore"></input>
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
