
import React from "react";
import { Link } from "react-router-dom";
import Button from './Button'
import './Footer.css'
import{FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa' 
function Footer(){
  return(
  <>
<div className='footer-container'>
  <section className='footer-subscription'>
    <p className='footer-subscription-heading'>
      join the adventure newsletter to receive our best vacation deals
      </p>
      <p className='footer-subscription -text'>
you can unsubscribe at any time
</p>
</section>

<div className='input-areas'>
<form>
  <input type='email' name='email' placeholder='Your email' className='footer-input' />
<Button buttonStyle='btn--outline'>subscribe</Button>
</form>
</div>

<div className='footer-links'>
  <div className='footer-link-wrapper'>
    <div className='footer-link-items'>
<h2>About us</h2>
<Link to='/sign-up'>How it works </Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      
      <section className='soical-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='soical-logo'>
              Travel</Link>
              </div>
<small className='website-rights'>Tavel o 2020</small>
<div className='soical-icons'>
<Link to='/' className='soical-icon-link facebook' target='_blank'
aria-label='Facebook'>
<i className='facebook'><FaFacebook></FaFacebook></i>
</Link>
<Link to='/' className='soical-icon-link instagram' target='_blank'
aria-label='Facebook'>
<i className='instagram'><FaInstagram></FaInstagram></i>
</Link>
<Link to='/' className='soical-icon-link twitter' target='_blank'
aria-label='Facebook'>
<i className='twitter'><FaTwitter></FaTwitter></i>
</Link>
<Link to='/' className='soical-icon-link youtube' target='_blank'
aria-label='Facebook'>
<i className='youtube'><FaYoutube></FaYoutube></i>
</Link>
</div>
</div>
</section>
</div>
</>

)
}
export default Footer
