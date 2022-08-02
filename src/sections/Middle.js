import React from 'react';
import coffeeMan from './assets/illustration.png';
import arrow from './assets/arrow_right.png';
import coffeeBean from './assets/coffee_beans.png';  

export default function Middle() {
  return (
    <div>

        <header>
            <div className="headContainerA">
                <div className="headItem4A">
                    <img src={coffeeMan} className="coffeeManA" alt='Coffee Man' />
                </div>
                <div className="headItem1A">
                    <h1>The Bean Machine</h1>
                </div>
                <div className="headItem2A">
                    <h2 className="coffeeBeanTextA">Coffee Bean Shop</h2>
                </div>
                <div className="headItem3A">
                    <input type="text" className="inputA" placeholder="Search for a coffee bean" />
                    <a href="/" className="arrowA"><img src={arrow} className="arrowActualA" alt='Arrow' /></a>
                </div>
            </div>
        </header>

        <main>
            <div className="aboutA">
              <h2 className="wordA aboutWordA">About</h2>
              <p className="wordA">We are specialty Coffee Bean Shop based in Barcelona, Spain.</p>
              <p className="wordA">We are passionate about the coffee bean quality so we source our beans from all over the world in order to give you the best out there!</p>
              <p className="wordA">Visit our specialty coffee shop at <a href="/"><strong className="laRamblaA">La Rambla 204</strong></a>, where we serve the best coffee in Barcelona.</p>
            </div>
            <h2 className="specialOffersTextA">Special offers</h2>
            <div className="specialOffersContainerA">
              <div className="specialContainerA">
                <div className="specialItemA">
                  <img src={coffeeBean} className="coffeeBeansPicA" alt='Coffee Beans' />
                  <p className="offersTextA">Cost Rica Single Origin</p>
                  <a href="/"><p className="buyTextA">BUY</p></a>
                </div>
              </div>
              <div className="specialContainerA">
                <div className="specialItemA">
                  <img src={coffeeBean} className="coffeeBeansPicA" alt='Coffee Beans' />
                  <p className="offersTextA">Brazil Medium Roast</p>
                  <a href="/"><p className="buyTextA">BUY</p></a>
                </div>
              </div>
              <div className="specialContainerA">
                <div className="specialItemA">
                  <img src={coffeeBean} className="coffeeBeansPicA" alt='Coffee Beans' />
                  <p className="offersTextA">Colombia Single Origin</p>
                  <a href="/"><p className="buyTextA">BUY</p></a>
                </div>
              </div>
            </div>
        </main>

    </div>
  )
}
