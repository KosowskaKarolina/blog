import React from 'react'
import '../styles/About.css';
import Mechanic from '../assets/mechanic.jpg';

function About() {
  return (
    <div className='about '>
      <img src={Mechanic} alt='Mechanic'></img>
      <div className='aboutUs'>
        <h2>Who we are?</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet neque commodo, pellentesque sem egestas, feugiat leo. Nulla facilisi. Maecenas sit amet mi ornare, tristique enim vel, blandit risus. Vestibulum id quam at metus cursus placerat vitae in sapien. Vestibulum nec bibendum nunc. Cras molestie, leo eu aliquam eleifend, velit leo sagittis est, nec rutrum mi ante a massa. Aenean vestibulum metus quis nibh mattis vehicula. 
        </p>
      </div>
    </div>
  )
}
export default About
