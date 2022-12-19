import React, { Component } from 'react'

 class Show extends Component {
  render() {
    const log = this.props.log;
    return (
        <body style={{backgroundColor:'aquamarine'}}>
      <div>
        <h1 style={{textAlign:'center',fontSize:'40px',color:'blueviolet'}}>Show The Log</h1>
        <p>The {log.title} is {log.entry}</p>
        <p>{log.shipIsBroken?`Ship is broken`:`Ship is not broken`}</p>
        <a style={{fontSize:'30px',color:'cadetblue'}}href ='/logs'>Logs Home Page</a>
        </div>
        </body>
    )
  }
}
export default Show;