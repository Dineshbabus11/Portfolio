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
          <p>Hello! I'm Dinesh Babu S, a passionate B.Tech Information Technology student at KPR Institute of Engineering and Technology, currently in my third year. I specialize in web development, Java programming, and branding strategies to create impactful digital experiences.
            <br/>
            <br/>
            I have hands-on experience in React.js and Java development, focusing on building efficient and scalable applications. During my internship at Thulir, I worked on a Hotel Management System, refining my problem-solving, teamwork, and communication skills. Additionally, I provide branding and social media campaign management services to support businesses in both urban and rural markets.
            <br/>
            I am always eager to learn new technologies and take on challenges that help me grow as a developer. My goal is to craft seamless digital solutions and contribute effectively to the tech industry.
          </p>
          <img src={profilepic} alt="Profile" />
        </div>
    </div>
  )
}
