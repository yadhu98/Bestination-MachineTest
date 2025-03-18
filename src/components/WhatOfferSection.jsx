import React from 'react'
import './whatweoffer.scss'
import personalisedIte from '../assets/personalisedItenatires.svg'
import globalDest from '../assets/globaldestinations.svg'
import exportTravelGuide from '../assets/experttravelguidance.svg'
import valueForMoney from '../assets/valueformoney.svg'
const WhatOfferSection = () => {
  return (
    <section className='what-we-offer'>
        <h2>What we offer</h2>
        <div className='services-section'>
            <div className='service-styles' >
                <img src={personalisedIte} alt="personalised iternaries" />
                <span>Personalized Itineraries</span>
                <p>Crafted just for you with attention to your needs and interests.</p>
            </div>
            <div className='service-styles'>
                <img src={globalDest} alt="global destinations" />
                <span>Global 
                Destinations</span>
                <p>Explore all 7 continents and discover hidden gems worldwide.</p>
            </div>
            <div className='service-styles'>
                <img src={exportTravelGuide} alt="export travel guidance" />
                <span>Expert Travel Guidance</span>
                <p>24/7 support from experienced travel advisors.</p>
            </div>
            <div className='service-styles'>
                <img src={valueForMoney} alt="value for money" />
                <span>Value 
                for Money</span>
                <p>Premium experiences at competitive prices.</p>
            </div>
        </div>
    </section>
  )
}

export default WhatOfferSection