import React, { Component } from "react";
import "./header.css";
import Search from "../search-bar/search-bar";

class header extends Component {
  state = {
    small: false
  };
  render() {
    return (
      <div className="mh">
        <Search />
      </div>
    );
  }
}

export default header;
