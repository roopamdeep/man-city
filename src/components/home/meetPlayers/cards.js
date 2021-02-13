import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Otamendi from "../../../Resources/images/players";
class HomeCards extends Component {
  state = {
    show: this.props.show,
  };
  showAnimateCards = () => {};
  render() {
    return <div>{this.showAnimateCards()}</div>;
  }
}

export default HomeCards;
