import React, { Component } from "react";
import Featured from "./featured";
import Matches from "./matches";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="bck_blue">
        <Featured />
        <Matches />
      </div>
    );
  }
}

export default Home;
