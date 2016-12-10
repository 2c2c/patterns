// Root cannot be stateless functional component
import {Router, Route, Link,} from 'react-router';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Stateless from './Stateless.js';
import Hoist from './Hoist.js';
import RenderCallback from './RenderCallback.js';
import Container from './Container.js';
import HOC from './HOC.js';
import Inject from './Inject'
import Map from './Map'

class App extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to={`/stateless`}>stateless</Link>
        </li>
        <li>
          <Link to={`/hoist`}>hoist</Link>
        </li>
        <li>
          <Link to={`/rendercallback`}>rendercallback</Link>
        </li>
        <li>
          <Link to={`/container`}>container</Link>
        </li>
        <li>
          <Link to={`/hoc`}>hoc</Link>
        </li>
        <li>
          <Link to={`/inject`}>inject</Link>
        </li>
        <li>
          <Link to={`/map`}>map</Link>
        </li>
      </ul>
    );
  }
}

const Main = () => <div>
  <h1>
    <Link to="/">Home</Link>
  </h1>
  {this.props.children}
</div>
export default App;
