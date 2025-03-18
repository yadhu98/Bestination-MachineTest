import React from 'react'
import SearchForm from './SearchForm'
// import bgImg from '../assets/hot-air-balloon-realistic-dreamscape 1.png'
const Hero = () => {
  return (
        <section id='home' className="hero">
          {/* <img src={bgImg} alt="bg-image" /> */}
          <div className="hero-content">
            <h1>
              Explore the <span className="highlight">World</span> Without <br /> Worry —  We've Got Your <br></br><span className="visa">Visa </span>Covered!
            </h1>
            <p>Discover the <span>world</span> with Bestination Holidays — crafting unforgettable <br></br> experiences across all seven continents.</p>
          </div>
          <div className="hero-content-mobile">
            <h1>
              Explore the <span className="highlight">World</span> Without Worry —  We've Got Your<span className="visa">Visa </span>Covered!
            </h1>
            <p>Discover the <span>world</span> with Bestination Holidays — crafting unforgettable experiences across all seven continents.</p>
          </div>
         <SearchForm/>
        </section>
  )
}

export default Hero