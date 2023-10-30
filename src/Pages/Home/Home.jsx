import React from 'react'
import "./Home.css"
import Profile from '../../components/Profile/Profile'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'

function Home() {
  return (
    <div className="home">
        <Profile/>
        <PostSide/>
       <RightSide/>
    </div>

  )
}

export default Home
