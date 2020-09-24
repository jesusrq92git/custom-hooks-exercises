import React, { useState } from 'react';
import useTodos from './hooks/useTodos';

const initialTodos = [
  { id: 1, title: 'Learn React'},
  { id: 2, title: 'Learn Node'},
  { id: 3, title: 'Learn Redux'},
]

const TodoApp = () => {
  const { todos, addTodo, deleteTodo } = useTodos(initialTodos);
  const [ newtitle, setNewtitle ] = useState("");
 
  const handleChange = (value) => {
    setNewtitle(value);
  }
  
  return(
    <div>
      <input 
        type="text" 
        name="toadd" 
        value={newtitle} 
        onChange={ (e)=>handleChange(e.target.value) } 
      />
      <button onClick={() => addTodo({title: newtitle}) }>
        Add
      </button>
      <ul>
        {
          todos.map(todo =>(
            <li key={todo.id}>
              {todo.title}
              <button
                onClick={() => deleteTodo(todo.id) }
                style={{'marginLeft':'10px'}}
              >
                Delete
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoApp;
