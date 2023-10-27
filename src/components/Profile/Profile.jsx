import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import "./Profile.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Profile = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard/>
    </div>
  );
};

export default Profile;
