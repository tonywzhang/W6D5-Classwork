import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tab from './tabs';

class Root extends React.Component {

  {
    title: "Tabs", content:[]
  }

  render(){
    return (
      <div>
        <div> <Clock /> </div>
        <div> <Tab /> </div>
      </div>
    );
  }
}

export default Root;
