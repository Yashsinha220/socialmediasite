import React from 'react'
import "./Home.css"
import Profile from '../../components/Profile/Profile'
import PostSide from '../../components/PostSide/PostSide'

function Home() {
  return (
    <div className="home">
        <Profile/>
        <PostSide/>
        <div className="rightside">Right Side</div>
    </div>

  )
}

export default Home
