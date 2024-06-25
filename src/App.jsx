import React, { useState, createContext } from "react";
import "./App.css";
import Todos from "./Todos";
import TodoForm from "./TodoForm";

const todosData = [
  {
    id: 1,
    title: "Finish Progate React Course",
    completed: false,
  },
  {
    id: 2,
    title: "Have lunch with Guru Domba",
    completed: false,
  },
  {
    id: 3,
    title: "Study React with Ninja Ken",
    completed: false,
  },
];

export const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState(todosData);

  const toggleCompleted = (todoId) => {
    console.log(todoId);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === "") {
      return console.log("Silahkan masukkan Todo yang ingin dikerjakan!");
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div className="container">
        <h1>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
        />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
