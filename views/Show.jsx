import React, { Component } from 'react'

 class Show extends Component {
  render() {
    const log = this.props.log;
    return (
      <div>
        <h1>Show The Log</h1>
        <p>The {log.title} is {log.entry}</p>
        <p>{log.shipIsBroken?`Ship is broken`:`Ship is not broken`}</p>
        <a href ='/logs'>Logs Home Page</a>
        </div>
    )
  }
}
export default Show;