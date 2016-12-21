import React from 'react'
import {observe} from './chess/Game'
import Board from './chess/Board'

const Chess = observe(knightPosition =>
  <Board knightPosition={knightPosition} />
)

export default Chess;
