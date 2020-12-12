import React from "react";
import Button from "./Button";
import {FaPlayCircle} from 'react-icons/fa'
import './Herosection.css'
function Herosection(){
return(
<div className='hero-container'>
<video src='/video/video-2.mp4' autoPlay loop muted>
  </video>
<h1>Adventure awaits</h1>
<p>What are you waiting for</p>
<div className='hero-btns'>
<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
  Get started
  </Button>
  <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
  Watch trailer<i className='faplaycircle'><FaPlayCircle></FaPlayCircle></i>
  </Button>
  
  </div>
  </div>
)
}
export default Herosection