import React from "react";
import cities from "../components/cityCards";

const TouristInfoCards = props => {
  return (
    <div className="card">
      {cities.map((city, index) => (
        <div className="card-body" key={index}>
          <img
            src={city.img.src}
            className={city.img.className}
            alt={city.img.alt}
          />
          <a href={city.link} className="btn btn-primary">
            {city.city}
          </a>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
