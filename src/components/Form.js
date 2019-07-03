import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: "",
        title: "",
        firstName: "",
        surname: "",
        email: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: ""
      }
    };
  }

  handleOnChange = event => {
    const newUser = this.state.user;
    newUser[event.target.name] = event.target.value;
    this.setState({
      user: newUser
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state.user);
  };

  render() {
    return (
      <div className="container">
        <hr />
        <h4 className="text-left">Add Bookings</h4>
        <hr />

        <form onSubmit={this.handleOnSubmit}>
          <div class="form-row">
            <div class="col-md-1 mb-3">
              <label for="validationDefault01">ID</label>
              <input
                type="hidden"
                class="form-control"
                id="validationDefault01"
                name="id"
                value=""
                required
                value={this.state.user.id}
                onChange={this.handleOnChange}
              />
            </div>
            <div class=" col-md-1 mb-3">
              <label for="validationDefault02">Title</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                value=""
                name="title"
                required
                value={this.state.user.title}
                onChange={this.handleOnChange}
              />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">First name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="First name"
                value=""
                name="firstName"
                required
                value={this.state.user.firstName}
                onChange={this.handleOnChange}
              />
            </div>
            <div class="col-md-4 mb-3">
              <label for="validationDefault02">Last name</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault02"
                placeholder="Last name"
                value=""
                name="surname"
                required
                value={this.state.user.surname}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-4 mb-3">
              <label for="validationDefault03">Email</label>
              <input
                type="email"
                class="form-control"
                id="validationDefault03"
                name="email"
                placeholder="Email"
                required
                value={this.state.user.email}
                onChange={this.handleOnChange}
              />
            </div>
            <div class="col-md-3 mb-3">
              <label for="validationDefault04">Room #</label>
              <input
                type="text"
                class="form-control"
                id="validationDefault04"
                placeholder="Room Number"
                name="roomId"
                required
                value={this.state.user.roomId}
                onChange={this.handleOnChange}
              />
            </div>

            <div class="col-md-3 mb-3">
              <label for="validationDefault05">Check-in</label>
              <input
                type="date"
                class="form-control"
                id="validationDefault05"
                name="checkInDate"
                required
                value={this.state.user.checkInDate}
                onChange={this.handleOnChange}
              />
            </div>
          </div>

          <div class="form-row">
            <div class="col-md-3 mb-3">
              <label for="validationDefault03">Check-out</label>
              <input
                type="date"
                class="form-control"
                id="validationDefault03"
                name="checkOutDate"
                required
                value={this.state.user.checkOutDate}
                onChange={this.handleOnChange}
              />
            </div>
          </div>

          <button class="btn btn-primary" type="submit">
            Add Booking
          </button>
        </form>
      </div>
    );
  }
}
