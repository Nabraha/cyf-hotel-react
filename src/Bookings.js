import React, { Component } from "react";
import Search from "./Search";
import SearchResults from "./components/SearchResults";
import Form from "./components/Form";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fakeBookings: []
    };
  }

  componentDidMount() {
    const URL = "https://cyf-react.glitch.me";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({
          fakeBookings: data
        });
      });
  }

  handleOnSearch(searchValue) {
    this.setState({
      fakeBookings: this.state.fakeBookings.filter(name => {
        return (
          name.firstName.toLowerCase() === searchValue.toLowerCase() ||
          name.surname.toLowerCase() === searchValue.toLowerCase()
        );
      })
    });
  }

  generateId = () => {
    const idList = this.state.fakeBookings.map(ele => {
      return ele.id;
    });
    return Math.max(...idList) + 1;
  };

  addBookings = newBookings => {
    const updateBooking = this.state.fakeBookings;
    const booking = Object.assign({}, newBookings);
    booking.id = this.generateId();
    updateBooking.push(booking);
    this.setState({
      fakeBooking: updateBooking
    });
  };

  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={searchVal => this.handleOnSearch(searchVal)} />
          {<SearchResults customerDetails={this.state.fakeBookings} />}
          <Form addUser={this.addBookings} />
        </div>
      </div>
    );
  }
}

export default Bookings;
