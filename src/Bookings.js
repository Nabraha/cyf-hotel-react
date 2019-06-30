import React from "react";
import Search from "./Search";
import SearchResults from "./components/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

const Bookings = () => {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults customerDetails={FakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
