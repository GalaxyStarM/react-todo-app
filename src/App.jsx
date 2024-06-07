import React, { useState } from 'react'
import './App.css'
import Todos from './Todos';

const todosData = [
  {
    id: 1,
    title: 'Finish Progate React Course',
    completed: false,
  },
  {
    id: 2,
    title: 'Have lunch with Guru Domba',
    completed: false,
  },
  {
    id: 3,
    title: 'Study React with Ninja Ken',
    completed: false,
  },
]

function App() {
  const [todos, setTodos] = useState(todosData);
  <link src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>

  console.log(todos);

  return (
    <div className='container'>
      <h1>My Todo List</h1>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
