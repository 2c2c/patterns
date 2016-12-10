import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import './index.css';
import Stateless from './Stateless.js';
import Hoist from './Hoist.js';
import RenderCallback from './RenderCallback.js';
import Container from './Container.js';
import HOC from './HOC.js';
import Inject from './Inject';
import Map from './Map';
import Main from './Main';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={App}/>
    <Route path="stateless" component={Stateless}/>
    <Route path="hoist" component={Hoist}/>
    <Route path="rendercallback" component={RenderCallback}/>
    <Route path="container" component={Container}/>
    <Route path="hoc" component={HOC}/>
    <Route path="inject" component={Inject}/>
    <Route path="map" component={Map}/>
  </Route>
</Router>, document.getElementById('root'));
