import React, { Component } from "react";

class Console extends Component {
  render() {
    return (
      <p onKeyDown={this.props.onKeyDown} tabIndex="0">
        {this.props.input}
      </p>
    );
  }
}

export default Console;
