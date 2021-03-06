import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo'
import Form from './components/Form'

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn about React' },
    { text: 'Meet friend for lunch' },
    { text: 'Build really cool todo app' }
  ])

  const updateTodos = (newTodos) => {
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
        <Form
          todos={todos}
          updateTodos={updateTodos}
        />
      </div>
    </div>
  );
}

export default App;
