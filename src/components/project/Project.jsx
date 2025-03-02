import React from 'react'
import './Project.css'
import WorkIcon from '@mui/icons-material/Work';
import Atmimg from './atm.png'
import Cartimg from './add-cart.png'
import Weatherimg from './cloudy-day.png'
import Qrimg from './laptop.png'
import Alumniimg from './alumni.png'
import Souledimg from './clothes-hanger.png'

export const Project = () => {
  return (
    <div className='project'>
        <div className='project_heading'>
            <h1>Projects</h1>
            <WorkIcon/>
        </div>
        <div className='project_content'>
            <div className='project_box'>
                <img src={Atmimg} alt="ATM" />
                <div project_details>
                    <h2>ATM Management System</h2>
                    <p>Tools: Java</p>
                    <p>Link: <a href='https://github.com/Dineshbabus11/ATM-Machine-Management-System.git'>GitHub</a></p>
                </div>
            </div>
            <div className='project_box'>
                <img src={Cartimg} alt="Savory" />
                <div project_details>
                    <h2>Savory</h2>
                    <p>Tools: React</p>
                    <p>Link: <a href='https://github.com/Dineshbabus11/food-cart-app.git'>Deploy</a></p>
                </div>
            </div>
            <div className='project_box'>
                <img src={Weatherimg} alt="Weather" />
                <div project_details>
                    <h2>Weather App</h2>
                    <p>Tools: React</p>
                    <p>Link: <a href='https://github.com/Dineshbabus11/weather_app.git'>GitHub</a></p>
                </div>
            </div>
            <div className='project_box'>
                <img src={Qrimg} alt="QR Code Generator" />
                <div project_details>
                    <h2>QR Code Generator</h2>
                    <p>Tools: React</p>
                    <p>Link: <a href='https://merry-crepe-43acce.netlify.app/'>Deploy</a></p>
                </div>
            </div>
            <div className='project_box'>
                <img src={Alumniimg} alt="Alumni" />
                <div project_details>
                    <h2>UniTide</h2>
                    <p>Tools: React</p>
                    <p>Link: <a href='https://github.com/Dineshbabus11/UniTide.git'>GitHub</a></p>
                </div>
            </div>
            <div className='project_box'>
                <img src={Souledimg} alt="Souled" />
                <div project_details>
                    <h2>Souled Stores Clone</h2>
                    <p>Tools: HTML, CSS, JavaScript</p>
                    <p>Link: <a href='https://souledstore.netlify.app/'>Deploy</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}
