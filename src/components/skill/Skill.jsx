import React from 'react'
import './Skill.css'
import SchoolIcon from '@mui/icons-material/School';
import Javaimg from './java.png'
import Htmlimg from './html.png'
import Cssimg from './css-3.png'
import Javascriptimg from './java-script.png'
import Reactimg from './react.png'
import Mysqlimg from './mysql.png'
import Gitimg from './social.png'
import Githubimg from './github.png'
import Figmaimg from './figma.png'


export const Skill = () => {
  return (
    <div className='skill'>
        <div className='skill_heading'>
            <h1>Skills</h1>
            <SchoolIcon/>
        </div>
        <div className='skill_content'>
            <img src={Javaimg} alt="Java" />
            <img src={Reactimg} alt="React" />  
            <img src={Htmlimg} alt="Html" /> 
            <img src={Cssimg} alt="Css" />    
            <img src={Javascriptimg} alt="JavaScript" />   
            <img src={Mysqlimg} alt="MySQL" />
            <img src={Gitimg} alt="Git" />
            <img src={Githubimg} alt="GitHub" />
            <img src={Figmaimg} alt="Figma" />
        </div>
    </div>
  )
}
