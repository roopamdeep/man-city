import React, { Component } from "react";
import Featured from "./featured";
import Matches from "./matches";
import MeetPlayers from "./meetPlayers";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="bck_blue">
        <Featured />
        <Matches />
        <MeetPlayers />
      </div>
    );
  }
}

export default Home;
