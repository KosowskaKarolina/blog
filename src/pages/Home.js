import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from '../assets/homeImg.jpg';
import '../styles/Home.css'

function Home() {
  return(
    <div className='home'>
        <div className='headerContainer' style={{backgroundImage: `url(${BannerImage})`}}>
        <h1>Car service and blog</h1>
        <p>All about vintage cars</p>
        <Link to="/blog">
        <button>Check it!</button>
        </Link>
        </div>
    </div>
  );
}
export default Home;
