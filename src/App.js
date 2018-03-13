import React from 'react';
import {Form} from 'semantic-ui-react'
import './App.css';

const App = props =>{
  return(
    <div className="App">
      <Form className="seg">
        <h1>{props.title}</h1>
        <h2>{props.numero}</h2>
        <Form.Button id="bot" onClick={props.IncrementarVal}>Incrementar</Form.Button>
        <Form.Button id="bot" onClick={props.DecrementarVal}>Decrementar</Form.Button>
        <h1>{props.title}</h1>
      </Form>
    </div>
  )
}

export default App;
