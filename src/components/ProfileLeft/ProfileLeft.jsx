import React from 'react'
import "./ProfileLeft.css"
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FolowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
