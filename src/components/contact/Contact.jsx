import React from 'react'
import './Contact.css'
import ContactsIcon from '@mui/icons-material/Contacts';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
export const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact_heading'>
            <h1>Contact</h1>
            <ContactsIcon/>
        </div>
        <div className='contact_content'>
            <h3>Dinesh Babu S</h3>
            <p>Coimbatore, India</p>
            <p><a href='mailto:msgtodineshbabus@gmail.com'>msgtodineshbabus@gmail.com</a>
            </p>
            <p>+91 8248944055</p>
            <div className='contact_logo'>
                <a href='https://www.linkedin.com/in/dinesh-babu-s/'><LinkedInIcon/></a>
                <a href='https://www.instagram.com/dinesh_babu_33?igsh=MXBidTJ6MnVyNHphMA=='><InstagramIcon/></a>
                <a href='mailto:msgtodineshbabus@gmail.com'><EmailIcon/></a>
            </div>
        </div>
    </div>
  )
}
