import React from 'react'
import './Home.css'
import HomeImg from './home_img.jpg'
import NearMeIcon from '@mui/icons-material/NearMe';
export const Home = () => {
  return (
    <div className='home'>
      <div className='right_part'>
            <img src={HomeImg} alt="home"/>
        </div>
        <div className='left_part'>
            <h1>Dinesh Babu S</h1>
            <p>I am a Developer</p>
            <div className='location_part'>
              <span>From Coimbatore</span>
              <NearMeIcon/>  
            </div>
            <a href='/Dinesh_Resume.pdf' download="Dinesh_Resume.pdf"><button>Download CV</button></a>
        </div>
    </div>
  )
}
