import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.pay.name}
          </td>
          <td>
            {this.props.pay.email}
          </td>
          <td>
            {this.props.pay.date}
          </td>
          <td>
            {this.props.pay.time}
          </td>
          <td>
            <button className="btn btn-primary">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;