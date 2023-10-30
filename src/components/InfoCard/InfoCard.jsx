import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  const [modalopen, setmodalopen] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          {" "}
          <UilPen
            width="1.2rem"
            onClick={() => {
              setmodalopen(true);
            }}
            
          />
          <ProfileModal modalOpened = {modalopen} setModalOpened = {setmodalopen}/>
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>In Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Delhi</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Teachers Tools</span>
      </div>

      <button className="button logout-bt">LogOut</button>
    </div>
  );
};

export default InfoCard;
