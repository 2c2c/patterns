import React from 'react'
import {Motion, spring} from 'react-motion';

export default class Motion1 extends React.Component {
  constructor() {
    super();
    this.state = {
      switch: false
    }
  }

  render() {
    const moving_style = ({x}) => <div style={{
      WebkitTransform: `translate3d(${x}px, 0, 0)`
    }}>{x}</div>

    return (
      <div>
        <button onClick={e => this.setState({
          switch: !this.state.switch
        })}>
          Hey
        </button>
        <Motion
          style={{
          x: spring(this.state.switch
            ? 200
            : 0)
        }}>{moving_style}</Motion>
      </div>
    );
  }
}
