import React from 'react';

const Greeting = ({name}) => {
  if (!name) {
    return <div>Connecting...</div>
  }

  return <div>hi {name}</div>

}

const Connect = ComposedComponent => class extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({name: "mike"})
    }, 5000)
  }

  render() {
    return (<ComposedComponent {...this.props} name={this.state.name}/>)
  }
}

export default Connect(Greeting);
