import React from 'react'
import './searchform.scss'
import locationIcon from '../assets/locationIcon.png'
import travelDateIcon from '../assets/travelDateIcon.png'
import totalDaysIcon from '../assets/totalDaysIcon.png'
import totalNoOfPeopleIcon from '../assets/numberOfPeopleIcon.png'
const SearchForm = () => {
    return (
        <div className="search-form">
            <p id='search-form-heading'>Find Your Dream Destination</p>
            <p>International and domestic tours from Kerala. Packages to all 7 continents.</p>
            <div className="form-group">
                <div className='search-filters-group'>
                    <div>
                        <img src={locationIcon} alt="loc-icon" />
                        <span>Location</span>
                    </div>
                    <div className="input-group">
                        <input type="text" placeholder="Search for your dream destination" />
                    </div>
                </div>
                <div className='search-filters-group'>
                    <div>
                        <img src={travelDateIcon} alt="traveldate-icon" />
                        <span>Travel Date</span>
                    </div>
                    <div className="input-group">
                        <input type="date" placeholder="Select Date" />
                    </div>
                </div>
                <div className='search-filters-group'>
                    <div>
                        <img src={totalDaysIcon} alt="traveldate-icon" />
                        <span>Total days</span>
                    </div>
                    <div className="input-group">
                        <select>
                            <option value="">Select total days</option>
                            <option value="3">3 days</option>
                            <option value="5">5 days</option>
                            <option value="7">7 days</option>
                        </select>
                    </div>
                </div>
                <div className='search-filters-group'>
                    <div>
                        <img src={totalNoOfPeopleIcon} alt="traveldate-icon" />
                        <span>No. of peoples</span>
                    </div>
                    <div className="input-group">
                        <select>
                            <option value="">No. of people</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <button className="angular-gradient-btn">Search</button>
            </div>
        </div>
    )
}

export default SearchForm