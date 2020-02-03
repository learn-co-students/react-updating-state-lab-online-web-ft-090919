import React from 'react'

class YouTubeDebbuger extends React.Component {

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

   bitrateClick = () => {
       this.setState({
           settings: {
            ...this.state.settings, 
            bitrate: 12
           }
       })
   }

   resClick = () => {
       this.setState({
           settings: {
            ...this.state.settings, 
            video: {
            ...this.state.settings.video,
            resolution: '720p'
            }
           }
       })
   }



   render(){
       return(
           <div>
            <button className="bitrate" onClick={this.bitrateClick}>Change Bitrate</button>
           <button className="resolution" onClick={this.resClick}>Change Resolution</button>
           </div>
       )
   }

}

export default YouTubeDebbuger