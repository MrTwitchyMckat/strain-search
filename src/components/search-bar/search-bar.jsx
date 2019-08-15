import React, { Component } from "react";

class searchBar extends Component {
  state = {
    textValue: ""
  };

  render() {
    return (
      <div className="search-container">
        <input type="text" placeholder="e.g. OG Kush, Sour Diesel..." />
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}

export default searchBar;
