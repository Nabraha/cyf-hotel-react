import React from "react";
import Heading from "./components/Heading";
import Bookings from "./Bookings";
import Footer from "./components/Footer";
import TouristInfoCards from "./components/TouristInfoCards";

import "./App.css";

const App = () => {
  const businessInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer contactInfo={businessInfo} />
    </div>
  );
};

export default App;
