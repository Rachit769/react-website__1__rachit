import React from "react";
import Carditem from "./Carditem";
import './Card.css'
function Cards(){
  return(
<div className='cards'>
  <h1> Check out this places</h1>
<div className='cards__container'>
  <div className='cards__wrapper'>
    <ul className='cards__item'>
      <Carditem src='images/img-9.jpg'
      text='Explore hidden waterfall in amazon'
      label='Adventure'
      path='/services'></Carditem>
            <Carditem src='images/img-1.jpg'
      text='Explore dawn over moutain peaks'
      label='Adventure'
      path='/services'></Carditem>
      </ul>
      <ul className='cards__item'>
            <Carditem src='images/img-3.jpg'
      text='Explore blue ocean and dive in'
      label='Adventure'
      path='/services'></Carditem>
            <Carditem src='images/img-4.jpg'
      text='Explore feild over a barren iland '
      label='Adventure'
      path='/services'></Carditem>
                  <Carditem src='images/img-4.jpg'
      text='explore hidden waterfall in amazon'
      label='Adventure'
      path='/services'></Carditem>
      
      </ul>
      </div>
      </div>
      </div>
  )
}
export default Cards