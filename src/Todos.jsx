import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({ todos, toggleCompleted, deleteTodo }) {
  return (
    <div className="container">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}
