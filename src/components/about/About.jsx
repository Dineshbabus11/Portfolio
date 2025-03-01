import React from 'react'
import './About.css'
import InfoIcon from '@mui/icons-material/Info';
import profilepic from './Profile.jpeg'

export const About = () => {
  return (
    <div className='about'>
        <div className='about_heading'>
            <h1>About</h1>
            <InfoIcon/>
        </div>
        <div className='about_content'>
            <p>I'm Dinesh Babu S, a B.Tech IT student at KPR Institute of Engineering and Technology (3rd year), specializing in Java development, React.js, and web development. I have hands-on experience in branding and social media campaign management, helping businesses grow digitally.<br/>During my internship at Thulir, I worked on a Hotel Management System, enhancing my problem-solving and teamwork skills. Passionate about technology and digital solutions, I aim to build seamless and efficient applications.</p>
            <img src={profilepic} alt="Dinesh Babu S" />
        </div>
    </div>
  )
}
