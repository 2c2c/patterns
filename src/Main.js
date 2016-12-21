import React from 'react';
import {Link} from 'react-router';

const Main = (props) => <div style={{height:'100%', width:'100%'}}>
  <h1>
    <Link to="/">Home</Link>
  </h1>
  {props.children}
</div>

export default Main;
