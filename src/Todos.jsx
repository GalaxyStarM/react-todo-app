import React from "react";
import TodoItem from "./TodoItem";

export default function Todos({todos}) {
    return(
        <div>
            {todos.map((todos) => {
                return <TodoItem key={todos.id} todo={todos}/>
            })}
        </div>
    );
}