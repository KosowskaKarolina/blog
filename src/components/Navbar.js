import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function Navbar() {
    const[openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <a href='/' className='brandName'>LOREM GARAGE</a>
        <div className='hiddenLinks'>
        <Link to="/" className='link-nav'>Home</Link>
        <Link to="/blog" className='link-nav'>Blog</Link>
        <Link to="/about" className='link-nav'>About</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/" className='link-nav'>Home</Link>
        <Link to="/blog" className='link-nav'>Blog</Link>
        <Link to="/about" className='link-nav'>About</Link>
        <button onClick = {toggleNavbar} id='menu'><ReorderIcon></ReorderIcon></button>
      </div>
    </div>
  )
}
export default Navbar
