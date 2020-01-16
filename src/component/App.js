import React from 'react';
import Display from './Display';
import Panel from './Panel';

import "./App.css"
import operation from '../control/operation';
export default class App extends React.Component{

  state = {
    result: null,
    opA: null,
    opB: null,
    op: null,
  }

  clickFuntion = buttonName => {
    this.setState(operation(this.state,buttonName));
  };

  render(){
    return(
      <div className="component-app">
       <Display value={this.state.result||this.state.opB||this.state.opA||"0"} />
       <Panel click={this.clickFuntion}/>
       </div>
    );
  }
}