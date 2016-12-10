// Root cannot be stateless functional component
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Hoist from './Hoist.js';
import Stateless from './Stateless.js';
import RenderCallback from './RenderCallback.js';
import Container from './Container.js';
import HOC from './HOC.js';
import Inject from './Inject'

class App extends Component {
  render() {
    return (
      <div>
        <Inject />
      </div>
    );
  }
}

export default App;
