import React from "react";
import TableRowList from "./TableRowList";

const SearchResults = props => {
  const result = props.customerDetails;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Room #</th>
          <th scope="col">Check-in</th>
          <th scope="col">Check-out</th>
          <th scope="col">Duration</th>
          <th scope="col">Edit</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {result.map(result => {
          return <TableRowList list={result} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
