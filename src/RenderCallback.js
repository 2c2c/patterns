import React from 'react';

const Width = ({children}) => children(500, 250)

const Callback = () =>
<Width>
  {(width, height) => <div> window is {width} by {height} </div>}
</Width>


export default Callback;
