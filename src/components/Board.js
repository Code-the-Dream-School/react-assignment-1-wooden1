import React, { Component } from 'react'
import O from '../images/0.png'
import X from '../images/1.png'
import Logo from '../images/logo.png'
import Cell from './Cell'
import ResetBtn from './ResetBtn'
class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cells: Array(9).fill(null),
      xIsNext: true,
    }
  }
  handleClick(i) {
    const cells = this.state.cells.slice()
    cells[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      cells: cells,
      xIsNext: !this.state.xIsNext,
    })
  }
  handleResetClick() {
    this.setState({
      cells: Array(9).fill(null),
      xIsNext: true,
    })
  }
  renderCell(i) {
    return (
      <Cell value={this.state.cells[i]} onClick={() => this.handleClick(i)} />
    )
  }

  didPlayerWin(cells) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a]
      }
    }
    return null
  }

  render() {
    const winner = this.didPlayerWin(this.state.cells)
    let status
    if (winner) {
      status = 'Winner ' + winner
      return status
    }
    status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`

    return (
      <div className="container">
        <div className="center">
          <img className="logo" src={Logo} alt="Logo" />
          <h1 className="niceFont text-uppercase">tic tac toe</h1>
        </div>

        {/* Names of players */}
        <div className="together">
          <p>
            <img className="icon" src={X} alt="icon"></img>{' '}
            {/* {this.props.state.player1.name} */}
          </p>
          <p>
            <img className="icon" src={O} alt="icon"></img>{' '}
            {/* {this.props.state.player2.name} */}
          </p>
        </div>
        <div className="board">
          <div className="row">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
          </div>
          <div className="row">
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
          </div>
          <div className="row">
            {this.renderCell(6)}
            {this.renderCell(7)}
            {this.renderCell(8)}
          </div>
        </div>
        <div className="together">
          <button
            type="submit"
            className="btn btn-dark niceFont"
            onClick={() => this.props.newGame()}
          >
            New Game
          </button>
          <ResetBtn
            value="Reset Game"
            onClick={() => this.handleResetClick()}
          />
        </div>
      </div>
    )
  }
}

export default Board
