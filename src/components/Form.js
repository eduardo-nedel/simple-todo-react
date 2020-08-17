import React, { useState } from 'react'

export default (props) => {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue('')
  }

  const addTodo = (text) => {
    const newTodos = [...props.todos, { text }]
    props.updateTodos(newTodos)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add Todo..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}