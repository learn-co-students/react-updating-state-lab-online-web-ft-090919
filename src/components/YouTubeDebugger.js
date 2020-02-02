import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor(props){
        super(props)
        this.state={
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

    handleBitrate = () =>{
        this.setState({
            settings: {
                ...this.state.settings , bitrate: 12
            }
        })
    }


    handleResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings, video: {
                    ...this.state.settings.video, resolution: '720p'
                }
            }
        })
    }


    render (){
        return (
            <div>
                <label>Bitrate Button:</label>
                <button onClick={this.handleBitrate} className="bitrate">{this.state.settings.bitrate}</button>
                <br></br>
                <label>Resolution Button:</label>
                <button className="resolution" onClick={this.handleResolution}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger;