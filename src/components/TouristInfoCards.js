import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card">
      <img src="..." className="card-img-top" />
      <div className="card-body">
        <a href="www.peoplemakeglasgow.com" className="btn btn-primary">
          Go Glasgow
        </a>
      </div>

      <img src="..." className="card-img-top" />
      <div className="card-body">
        <a href="www.visitmanchester.com" className="btn btn-primary">
          Go Manchester
        </a>
      </div>

      <img src="..." className="card-img-top" />
      <div className="card-body">
        <a href="www.visitlondon.com" className="btn btn-primary">
          Go London
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
