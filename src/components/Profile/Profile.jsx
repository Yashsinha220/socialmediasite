import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import "./Profile.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FolowersCard/FollowersCard";

const Profile = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <ProfileCard/>
      <FollowersCard/>
    </div>
  );
};

export default Profile;
