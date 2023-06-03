import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faWind, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function DetailsPage() {
  const { id } = useParams();
  const { location } = useSelector((store) => store.location);
  let detailWeather = [];
  detailWeather = location.forecast.forecastday.filter((oneday) => oneday.date === id);
  if (detailWeather.length === 0) {
    return (
      null
    );
  }

  return (
    <div className="detail-container">
      <div className="stat">
        <h2><NavLink to="/"><FontAwesomeIcon icon={faArrowLeft} size="1x" /></NavLink></h2>
      </div>
      <div className="top-box">
        <div className="loc">
          <h3>Weather forcast for:-</h3>
          <h3>{detailWeather[0].date}</h3>
        </div>
        <div className="lat">
          <div className="temp">
            <img src={detailWeather[0].day.condition.icon} alt="" />
            <h3>
              {detailWeather[0].day.avgtemp_c}
              °C
            </h3>
          </div>
          <div className="charactor">
            <div className="humidity">
              <FontAwesomeIcon icon={faWater} size="3x" />
              <h3>
                {detailWeather[0].day.avghumidity}
                %
              </h3>
            </div>
            <div className="speed">
              <FontAwesomeIcon icon={faWind} size="3x" />
              <h3>
                {detailWeather[0].day.avgvis_km}
                km/h
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="stat">
        <h4>24 Hours Forcast</h4>
      </div>
      <div>
        {
            detailWeather[0].hour
              .map((item) => (
                <div className="time-container" key={item.tim}>
                  <div className="time">
                    <h4>{item.time}</h4>
                  </div>
                  <div className="day-temp">
                    <img src={item.condition.icon} alt="" />
                    <h4>
                      {item.temp_c}
                      °C
                    </h4>
                  </div>
                  <div className="day-con">
                    <div className="speed">
                      <FontAwesomeIcon icon={faWind} size="1x" />
                      <h4>
                        {detailWeather[0].day.avgvis_km}
                        km/h
                      </h4>
                    </div>
                    <div className="humi">
                      <FontAwesomeIcon icon={faWater} size="1x" />
                      <h4>
                        {detailWeather[0].day.avghumidity}
                        %
                      </h4>
                    </div>

                  </div>
                </div>
              ))
        }
      </div>
    </div>
  );
}
