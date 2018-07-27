import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Root from './root';
import Tab from './tabs';

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root />, root);
});
