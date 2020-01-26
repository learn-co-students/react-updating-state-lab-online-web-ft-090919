// Code YouTubeDebugger Component Here

import React from "react";

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p"
        }
      }
    };
  }

  handleBitrate() {
    this.setState(prevState => {});
  }

  handleResolutionO() {
    return "idk";
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate}></button>
        <button className="resolution" onClick={this.handleResolution}></button>
      </div>
    );
  }
}
