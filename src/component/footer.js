import React from 'react'
import './footer.css';
import fb from './assets/fb.png';
import ig from './assets/ig.png';
import tt from './assets/tt.png';


const footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="https://www.instagram.com/pablocoffe_/" target="_blank" rel="noopener noreferrer"><img src={ig} /></a>
        <a href="https://www.facebook.com/profile.php?id=100091659591320" target="_blank" rel="noopener noreferrer"><img src={fb} /></a>
        <a href="https://www.tiktok.com/@pablocoffeeco?_t=8bY9DldA3vd&_r=1" target="_blank" rel="noopener noreferrer"><img src={tt} /></a>
      </div>
    </div>
  )
}

export default footer