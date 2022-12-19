import React, { Component } from 'react'

 class New extends Component {
  render() {
    console.log("new page")
    return (
        <body style={{backgroundColor:'steelblue'}}>
      <div>
        <h1 style={{textAlign:'center',color:'darkblue',fontSize:'40px'}}>New Captain Log</h1>
      <form action='/logs' method='POST'>
        TITLE: <input type="text" name="title" /><br/><br/>
       ENTRY:  <input type="textarea" name="entry" /><br/><br/>
        IS SHIP BROKEN:  <input type="checkbox" name="shipIsBroken" /><br/><br/>
        <input type="submit" name="" value="Create Log" />
        
      </form>
      </div>
      </body>
    )
  }
}
export default New;
