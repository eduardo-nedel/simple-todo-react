import React from 'react'

export default (props) => {
  return (
    <div className="todo">
      {props.todo.text}
    </div>
  )
}