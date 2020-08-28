import React from 'react'

function Cell(props) {
  return (
    <button className="btn btn-outline-dark square " onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Cell
