import React from 'react';

class DigitalClicker extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            timesClicked: 0
        }
    }


    handleClick = event => {
        this.setState(prevState => {return {timesClicked: prevState.timesClicked + 1}})
    }
    

    render (){
        return (
            <div>
                <label>Times Clicked:</label>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalClicker;