// state hoisting
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class NameContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }
  render() {
    return <NameMiddle handleChange={newName => this.setState({name: newName})}/>
  }
}
const NameMiddle = ({handleChange}) => <Name handleChange={handleChange}/>
const Name = ({handleChange}) => <input onChange={e => handleChange(e.target.value)}/>
export default NameContainer;
