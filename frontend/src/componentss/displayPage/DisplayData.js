import React from 'react'
import NavBar from '../NavBar'
import "./DisplayData.css"
import Posts from './Posts'

function DisplayData() {
  return (
    <div className="main-box">
      <div>
        <NavBar/>
        <Posts/>
      </div>
    </div>
  )
}

export default DisplayData
