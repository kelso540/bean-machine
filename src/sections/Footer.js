import React from 'react'
import facebook from './assets/facebook.png'; 
import instagram from './assets/reddit.png';
import twitter from './assets/twitter.png'; 

export default function Footer() {
  return (
    <div>
        <footer>
            <p className="findUs">Find us on social media</p>
            <a href="https://instagram.com"><img src={instagram} className="socialPicA" alt='instagram' /></a>
            <a href="https://twitter.com"><img src={twitter} className="socialPicA" alt='twitter' /></a>
            <a href="https://facebook.com"><img src={facebook} className="socialPicA" alt='facebook' /></a>
        </footer>
    </div>
  )
}
