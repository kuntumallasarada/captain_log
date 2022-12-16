import React, { Component } from 'react'

 class New extends Component {
  render() {
    return (
      <div>
        <h1>New Captain Log</h1>
      <form action='/logs' method='POST'>
        TITLE: <input type="text" name="title" /><br/><br/>
       ENTRY:  <input type="textarea" name="entry" /><br/><br/>
        IS SHIP BROKEN:  <input type="checkbox" name="shipIsBroken" /><br/><br/>
        <input type="submit" name="" value="Create Log" />
        
      </form>
      </div>
    )
  }
}
export default New;
