import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowCircleRight } from './icons';

export default function Item({
  // eslint-disable-next-line react/prop-types
  date, sunrise, sunset, id,
}) {
  return (
    <div className="item-container">

      <Link
        to={`/details/${id}`}
      >
        <ArrowCircleRight />
      </Link>
      <div className="date">
        <h3>Forcast Date</h3>
        <h4>{date}</h4>
      </div>
      <div className="day-time">
        <h5>
          Sunrise:-
          {sunrise}
        </h5>
        <h5>
          Sunset:-
          {sunset}
        </h5>

      </div>
    </div>
  );
}
