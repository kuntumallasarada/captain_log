import React, { Component } from 'react'

 class Edit extends Component {
  render() {
    const log = this.props.log;
    return (
        <body style={{backgroundColor:'teal'}}>
      <div>
        <h1 style={{textAlign:'center',color:'darkblue',fontSize:'40px'}}>Edit The Log</h1>
        <form action={`/logs/${log.id}?_method=PUT`} method='POST'>
        Title : <input type='text' name='title' defaultValue={log.title}/><br/><br/>   
        Entry : <input type='textarea' name='entry' defaultValue={log.entry}/><br/><br/> 
        Is Ship Broken:{
        log.shipIsBroken?
        <input type='checkbox' name='shipIsBroken' defaultChecked/>:
        <input type='checkbox' name='shipIsBroken'/>
    } <br/>
      <input type='submit' name="" value='Edit The Log'/>
        </form>
        </div>
        </body>
    )
  }
}
export default Edit;