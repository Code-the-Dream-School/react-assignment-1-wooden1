import React from 'react'

export function ResetBtn(props) {
  return (
    <button type="submit" onClick="{props.onClick}">
      {props.value}
    </button>
  )
}

export default ResetBtn
