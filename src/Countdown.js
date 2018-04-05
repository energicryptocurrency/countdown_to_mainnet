
import React, { Component } from 'react';

class Countdown extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      timer: null,
      launchDate: new Date(Date.UTC(2018, 3, 14, 15, 0, 0, 0)),//'2018-04-14T15:00:00')),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    //this.componentDidMount = componentDidMount.bind(this);
    //this.componentWillUnmount = componentWillUnmount.bind(this);
    this.tick = this.tick.bind(this);
    //this.render = render.bind(this);
  }

  componentDidMount()
  {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }

  componentWillUnmount()
  {
    this.clearInterval(this.state.timer);
  }

  tick()
  {
    const launch_time = this.state.launchDate.getTime() / 1000;
    const current_time = new Date().getTime() / 1000;
    var remaining_time = launch_time - current_time;

    const days = Math.floor(remaining_time / (3600*24));
    remaining_time -= days * 3600 * 24;
    const hours = Math.floor(remaining_time / 3600);
    remaining_time -= hours * 3600;
    const minutes = Math.floor(remaining_time / 60);
    remaining_time -= minutes * 60;
    const seconds = Math.floor(remaining_time);

    this.setState({
      launch_time: launch_time,
      current_time: current_time,
      remaining_time: remaining_time,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render()
  {
    return (
      <div class="Countdown">
        <div className="CountdownMessage">
          <p>Energi Main Net Launches at:</p>
          <p><b>{this.state.launchDate.toString()}</b></p>
        </div>
        <div class="CountdownTimer">
          <p>{this.state.days} Days {this.state.hours} Hours {this.state.minutes} Minutes {this.state.seconds} Seconds</p>
        </div>
      </div>
    )
  }
}

export default Countdown;
