import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import noti from "../../img/noti.png";
import comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcon">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={noti} alt="" />
        <img src={comment} alt="" />
      </div>
      <TrendCard/>
      <button className="button r-bt">Share</button>

      
    </div>
  );
};

export default RightSide;
