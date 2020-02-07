import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
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

    changeRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    changeBit = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    render() {
        return (
            <div>
            <button onClick={this.changeRes} className="resolution">Change Resolution</button>
            <button onClick={this.changeBit} className="bitrate">Change Bitrate</button>
            </div>
        )
    }
}
