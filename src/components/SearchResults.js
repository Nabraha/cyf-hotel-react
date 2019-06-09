import React from "react";
import moment from "moment";
const SearchResults = props => {
  const result = props.results;
  return (
    <table className="table">
      <tr>
        <th>First name</th>
        <th>Last name</th>
        <th>Check-in</th>
        <th>Check-out</th>
        <th>Duration In Days</th>
      </tr>

      {result.map(result => {
        const checkIn = result.checkInDate;
        const checkOut = result.checkOutDate;
        const duration = moment(checkOut).diff(checkIn);
        const durationInHours = duration / 1000 / 60 / 60;
        const durationInDays = Math.round(durationInHours / 24);
        return (
          <tr>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{checkIn}</td>
            <td>{checkOut}</td>
            <td>{durationInDays}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default SearchResults;
