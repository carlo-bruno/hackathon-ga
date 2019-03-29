import React, { Component } from "react";

class Status extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: 30
    }
  }

  componentDidMount() {

  }

  render() {
    let droneId = String.fromCharCode(64 + Math.floor((Math.random() * 26) + 1)) + String.fromCharCode(64 + Math.floor((Math.random() * 26) + 1)) + "-" + Math.floor(1000 + Math.random() * 9000);
    return (
      <div className="Status Modal">
        <div className="outer" onClick={(e) => this.props.handleCloseModal(e)}></div>

        <div className="inner">
          <h1> Your Item should arive within {this.state.time} seconds on Drone {droneId} </h1>
          {/* <button onClick={(e) => this.props.handleCloseModal(e)}> OK </button> */}
        </div>
      </div>
    )
  }
}
export default Status;

