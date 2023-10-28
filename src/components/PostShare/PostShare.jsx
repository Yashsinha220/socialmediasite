import React, { useState, useRef } from "react";
import Profile from "../../img/profileImg.jpg";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";

const PostShare = () => {
  const [image, setimage] = useState(null);
  const imgRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setimage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <div className="PostShare">
      <img src={Profile} alt="" />
      <div>
        <input type="text" placeholder="what's happening" />
        <div className="PostOptions">
          <div
            className="option"
            style={{
              color: "var(--photo)",
            }}
            onClick={() => imgRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>
          <div
            className="option"
            style={{
              color: "var(--video)",
            }}
          >
            <UilPlayCircle />
            Vidoe
          </div>
          <div
            className="option"
            style={{
              color: "var(--location)",
            }}
          >
            <UilLocationPoint />
            Location
          </div>
          <div
            className="option"
            style={{
              color: "var(--shedule)",
            }}
          >
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imgRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setimage(null)} />
            <img src={image.image} alt="No imgae" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
