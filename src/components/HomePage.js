import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import Item from './Item';
import { getLocation } from '../redux/location/locationSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const { location } = useSelector((store) => store.location);
  const { isLoading } = useSelector((store) => store.location);
  const [searchval, setSearchval] = useState('London');
  function searchHandler(searchval) {
    dispatch(getLocation(searchval));
  }
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="nav">

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            searchHandler(searchval);
          }}
        >
          Search
        </button>
        <input
          type="text"
          placeholder="search for location"
          onChange={(e) => {
            setSearchval(e.target.value);
          }}
        />

      </div>
      <div className="top-box">
        <div className="loc">
          <h3>{location.location.name}</h3>
          <h3>{location.location.country}</h3>
        </div>
        <div className="lat">
          <div className="temp">
            <img src={location.current.condition.icon} alt="" />
            <h2>
              {location.current.temp_c}
              °C
            </h2>
          </div>
          <div className="charactor">
            <div className="humidity">
              <FontAwesomeIcon icon={faWater} size="3x" />
              <h3>
                {location.current.humidity}
                %
              </h3>
            </div>
            <div className="speed">
              <FontAwesomeIcon icon={faWind} size="3x" />
              <h3>
                {location.current.wind_mph}
                km/h
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="stat">
        <h4>Comming 10days Forcast</h4>
      </div>
      <div className="stat-numerics ">
        {
            location.forecast.forecastday
              .map((item) => (
                <Item
                  date={item.date}
                  sunrise={item.astro.sunrise}
                  sunset={item.astro.sunset}
                  averagetemp={item.day.avgtemp_c}
                  averagewindspeed={item.day.avgvis_km}
                  averagehumidity={item.day.avghumidity}
                  condition={item.day.condition.text}
                  icon={item.day.condition.icon}
                  id={item.date}
                  key={item.date}
                />
              ))
        }
      </div>
    </div>
  );
}
