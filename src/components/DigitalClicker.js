// Code DigitalClicker Component Here
import { React } from "react";

class DigitalClicker extends React.component {
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
