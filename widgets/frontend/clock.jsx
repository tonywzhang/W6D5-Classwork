import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clock: new Date(),
    };
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({clock: new Date()});
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }


  render() {
    let hours = this.state.clock.getHours();
    let meridiem = hours > 11 ? 'PM' : 'AM';
    hours = hours % 12;
    let minutes = this.state.clock.getUTCMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = this.state.clock.getUTCSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
      <div className="clock">
        <h1 className="clockTitle">tick tock this is a clock</h1>
        <h2 className="time"> Time: {hours}:{minutes}:{seconds} {meridiem}</h2>
        <h2 className="date"> Date: {this.state.clock.toDateString()}</h2>
      </div>
    );
  }
}

export default Clock;
