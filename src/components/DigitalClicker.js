import React, { Component } from 'react';

class DigitalClicker extends Component{
    constructor(){
        super();

        this.state = {
            timesClicked: 0
        };
    }
    
    render(){
        return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }

    handleClick = () => {
        this.setState(previousState => ({ timesClicked: previousState.timesClicked + 1 }))
    }
}

export default DigitalClicker;