import React from "react";

// import ReactDOM from "react-dom";


// class TimerInput extends React.Component {
//   render() {
//     return (
//       <div style={{marginLeft:100}}>
//         <h3>Input your desired time</h3>
//         <input type="number" value={this.props.value} onChange={this.props.handleChange} required />
//       </div>
//     );
//   }
// }

class Timer extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1 style={{ "fontSize": "25px", "fontColor": "red" }}>
          Time Remaining  {this.props.value}:{this.props.seconds}</h1>
      </div>
    );
  }
}

// class StartButton extends React.Component {
//   render() {
//     return (
//       <div style={{ marginLeft: 130 }}>
//         <button className="btn btn-lg btn-success" disabled={!this.props.value} onClick={this.props.startCountDown}>Start</button>
//       </div>

//     );
//   }
// }

class TimerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '01',
      isClicked: false
    }

    // this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.startCountDown();
  }

  // handleChange(event) {
  //   this.setState({
  //     value: 23
  //   })
  // }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      this.props.Submit();
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--
  }

  startCountDown = () => {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true
    })
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <Timer value={this.state.value} seconds={this.state.seconds} />
          </div>
        </div>
      </div>
    );
  }
};


export default TimerComponent;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
