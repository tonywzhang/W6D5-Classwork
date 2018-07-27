import React from 'react';
import ReactDOM from 'react-dom';

class Tab extends react.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
  }

  render(){
    return (
      <ul>
        this.props.tabs.map(tab => (
          <article>
            <li>{tab.title}</li>
            <li>{tab.content}</li>
          </article>
          ))
      </ul>
    );
  }

}

export default Tab;
