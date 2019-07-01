import React, { Component } from "react";
import moment from "moment";
import Delete from "./DeleteButton";
import Edit from "./EditButton";

class TableRowList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rowBackgroundColor: ""
    };
  }
  handleOnClick() {
    this.setState({
      rowBackgroundColor:
        this.state.rowBackgroundColor === "" ? "LightGray" : ""
    });
  }
  render() {
    const checkIn = this.props.list.checkInDate;
    const checkOut = this.props.list.checkOutDate;
    const duration = moment(checkOut).diff(checkIn);
    const durationInHours = duration / 1000 / 60 / 60;
    const durationInDays = Math.round(durationInHours / 24);
    return (
      <tr
        onClick={() => this.handleOnClick()}
        style={{ backgroundColor: this.state.rowBackgroundColor }}
        s
      >
        {/*         <td scope="row">{this.props.list.id}</td>
        <td>{this.props.list.title}</td> */}
        <td>{this.props.list.firstName}</td>
        <td>{this.props.list.surname}</td>
        <td>{this.props.list.email}</td>
        <td>{this.props.list.roomId}</td>
        <td>{checkIn}</td>
        <td>{checkOut}</td>
        <td>{durationInDays}</td>
        <td>
          <Edit />
        </td>
        <td>
          <Delete />
        </td>
      </tr>
    );
  }
}
export default TableRowList;
