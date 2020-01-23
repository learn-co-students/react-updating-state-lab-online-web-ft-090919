import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
  constructor(){
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
  }

  changeBitrate = () => {
    this.setState(lastState => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12,
      }}
    })
  }

  changeResolution = () => {
    this.setState(lastState => {
      return {
        settings: {
          ...lastState.settings,
          video: {
            ...lastState.settings.video,
            resolution: '720p'
          }
        }
      }
    })
  }

  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.changeBitrate}>
          Bitrate {this.state.settings.bitrate}
        </button>
        <button className='resolution' onClick={this.changeResolution}>
          Current Resolution is {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}
