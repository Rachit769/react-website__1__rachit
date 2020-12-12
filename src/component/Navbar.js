import React from "react";
import {useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

import { FaAtlassian,FaTimes,FaAlignJustify } from 'react-icons/fa';
import  Button from './Button';

function Navbar(){
 
  const[click,setclick]=useState(false)
  const[button,setbutton]=useState(true)
  useEffect(()=>{
showbutton();
  },[])
  const eventhandler=()=>{
    setclick(!click)
  }
  const closemobilemenu=()=>{
    setclick(false)
  }
  const showbutton=()=>{
    if(window.innerWidth<=960){
setbutton(false)
    }
    else{
setbutton(true)
    }
  }
window.addEventListener('resize',showbutton)
  return(
    <> 
    <div className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-lo'>
          Travelers<FaAtlassian ></FaAtlassian>
          </Link>
          
          
          <div className='menu-icon'>
          
        <i className='menu' onClick={eventhandler}>
         {click ? <FaTimes className='Fatimes'></FaTimes> : <FaAlignJustify className='Faalignjustify'></FaAlignJustify>}

        </i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-link'onClick={closemobilemenu} >
           Home
</Link>
</li>
<li className='nav-item'>
          <Link to='/services' className='nav-link'onClick={closemobilemenu} >
            services
</Link>
</li>
<li className='nav-item'>
          <Link to='/products' className='nav-link' onClick={closemobilemenu} >
products

</Link>
</li>
<li className='nav-item'>
          <Link to='/sign-up' className='nav-link-mobile'onClick={closemobilemenu} >
sign-up

</Link>
</li>
</ul>
{button && <Button buttonStyle='btn--outline'>Sign-up</Button>}

</div>
</div>
</>

  )
}
export default Navbar