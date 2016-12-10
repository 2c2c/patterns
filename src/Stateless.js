import React, {Component} from 'react';

const Hello = () => <div>Hello</div>

const Hey = (props) => <div>Hello {props.name}</div>

// destructure props
const Hey2 = ({name}) => <div>Hello {name}</div>

const Stateless = () => <div>
  <Hello/>
  <Hey name="mike"/>
  <Hey2 name="bob"/>
</div>

export default Stateless;
