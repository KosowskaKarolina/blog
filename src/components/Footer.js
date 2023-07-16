import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <span>Karolina Kosowska</span>
           <PhoneIcon></PhoneIcon>
            <span>785 022 894</span>
            <EmailIcon></EmailIcon>
            <span>karolina.kosowska@proton.me</span>
        </div>
    </div>
  );
}

export default Footer
