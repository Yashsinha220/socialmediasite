import React from 'react'
import "./Home.css"
import Profile from '../../components/Profile/Profile'

function Home() {
  return (
    <div className="home">
        <Profile/>
        <div className="postSide">Posts</div>
        <div className="rightside">Right Side</div>
    </div>

  )
}

export default Home
