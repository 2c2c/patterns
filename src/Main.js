import React from 'react';
import {Link} from 'react-router';

const Main = (props) => <div>
  <h1>
    <Link to="/">Home</Link>
  </h1>
  {props.children}
</div>

export default Main;
