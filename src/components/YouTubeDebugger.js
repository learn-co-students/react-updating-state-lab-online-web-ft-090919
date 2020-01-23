import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
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

  bitrateHandler = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })
    })
  }

  resolutionHandler = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: {
          resolution: '720p'
        }
      })
    })
  }

  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.bitrateHandler}>Bitrate changer</button>
        <button className='resolution' onClick={this.resolutionHandler}>Resolution changer</button>
      </div>
    )
  }
}
