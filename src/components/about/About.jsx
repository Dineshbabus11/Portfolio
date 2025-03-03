import React from 'react'
import './About.css'
import InfoIcon from '@mui/icons-material/Info';
import profilepic from './Profile.jpeg'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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
        <div className='education_detail'>
          <div className='content_box'>
            <div className='education_heading'>
              <h2>Education</h2>
              <HistoryEduIcon/>
            </div>
            <div className='education_content'>
              <h3>SSLC:</h3>
              <p>Jaycee Higher Secondary School, Coimbatore (90%)</p>
              <h3>HSC:</h3>
              <p>Jaycee Higher Secondary School, Coimbatore (91%)</p>
              <h3>Under Graduate (2022-2026):</h3>
              <p>KPR Institute of Engineering and Technology, Coimbatore (CGPA: 8.4)</p>
            </div>
          </div>
          <div className='content_box'>
            <div className='education_heading'>
              <h2>Internship</h2>
              <WorkspacePremiumIcon/>
            </div>
            <div className='education_content'>
              <h3>Thulir, Singapore (July 2024 - Present):</h3>
              <p>Junior Web Developer</p>
              <h3>Squash Apps Private Limited, Coimbatore (Jan 2024 - Feb 2024):</h3>
              <p>Intern (Web Development)</p>
              <h3>KG IT Solution, Bangalore (Aug 2023 - Sep 2023):</h3>
              <p>Intern (Data Analyst)</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}
