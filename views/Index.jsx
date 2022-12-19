import React, { Component } from 'react'

 class Index extends Component {
  render() {
    const logs = this.props.logs;
    return (
      <div>
        <nav>
            <a href = '/logs/new'>Create a New Log </a>
        </nav>
        <h1>Captain Log Index Page</h1>
        <ul>
            {logs.map((log)=>{
               return(
                <li>
                  The <a href={`/logs/${log.id}`}>{log.title}</a>
                  is  {log.entry}<br/>
                  {log.shipIsBroken ? `Ship is broken`:`Ship is not broken`} <br/> 
                <form action={`logs/${log.id}?_method=DELETE`} method="POST">
                    <input type='submit' value='DELETE'/>
                </form>
                <a href={`/logs/${log.id}/edit`}>Edit this Log</a>
                </li>
               )
            })}
        </ul>
        </div>
    )
  }
}

export default Index;