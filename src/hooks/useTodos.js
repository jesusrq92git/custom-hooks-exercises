import { useState } from 'react';

const useTodos = (initial) => {
  const [todos, setTodos] = useState(initial);

  const addTodo = (newTodo) => {
    newTodo.id = Date.now();
    setTodos([
      ...todos,
      newTodo
    ])
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  return[
    todos,
    addTodo,
    deleteTodo
  ]
}

export default useTodos;