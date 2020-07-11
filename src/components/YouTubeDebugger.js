import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
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

    updateBitrate = e => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    bitrate: 12
                }
            }
        });
    }

    updateResolution = e => {
        this.setState(prevState => {
            return {
                settings: {
                    ...prevState.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.updateBitrate} className="bitrate">{this.state.settings.bitrate}</button>,
                <button onClick={this.updateResolution} className="resolution">{this.state.settings.video.resolution}</button>
            </div>
        );
    }
}
