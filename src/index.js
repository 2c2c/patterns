import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  browserHistory,
  IndexRoute,
} from 'react-router';
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
import Motion1 from './Motion1'
import Motion2 from './Motion2'
import Board from './Board'
import {observe} from './Game'

const ChessBoard = () => <Board knightPosition={[0, 0,]}/>
observe(knightPosition =>
ReactDOM.render(
  <Board knightPosition={knightPosition} />,
  document.getElementById('root')
))

// ReactDOM
// .render(
//   <Router history={browserHistory} style={{height: '100%', width: '100%'}}>
//   <Route path="/" component={Main}>
//     <IndexRoute component={App}/>
//     <Route path="stateless" component={Stateless}/>
//     <Route path="hoist" component={Hoist}/>
//     <Route path="rendercallback" component={RenderCallback}/>
//     <Route path="container" component={Container}/>
//     <Route path="hoc" component={HOC}/>
//     <Route path="inject" component={Inject}/>
//     <Route path="map" component={Map}/>
//     <Route path="motion1" component={Motion1}/>
//     <Route path="motion2" component={Motion2}/>
//     <Route path="dragdrop" component={ChessBoard}/>
//   </Route>
// </Router>, document.getElementById('root'));
