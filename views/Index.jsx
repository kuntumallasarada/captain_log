import React, { Component } from 'react'

 class Index extends Component {
  render() {
    const logs = this.props.logs;
    return (
        <body style={{backgroundColor:'cyan'}}>
      <div>
        <h1 style={{textAlign:'center',color:'blue',fontSize:'40px'}}>Captain Log Index Page</h1>
        <nav>
            <a style={{color:'black',fontSize:'30px'}}href = '/logs/new'>Create a New Log </a>
        </nav>
        <ul style={{display:'inlineBlock',textAlign:'left'}}>
            {logs.map((log)=>{
               return(
                <li>
                  The <a style={{textAlign:'center',color:'indigo',fontSize:'30px'}} href={`/logs/${log.id}`}>{log.title}</a>
                  <br/> <br/>
                <form action={`logs/${log.id}?_method=DELETE`} method="POST">
                    <input style={{width:'80px',backgroundColor:'slateblue'}} type='submit' value='DELETE'/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                <a style={{width:'500px',fontSize:'20px'}} href={`/logs/${log.id}/edit`}>Edit this Log</a>
                <br/><br/>
                </form>
                </li>
               )
            })}
        </ul>
        </div>
        </body>
    )
  }
}

export default Index;