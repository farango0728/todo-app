import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, todoDelete, todoToogleCompled }) => {
  return (
    <div>
      <h1>Listas Tareas Lunes</h1>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todos.id}
          todoDelete={todoDelete}
          todoToogleCompled={todoToogleCompled}
        />
      ))}
    </div>
  );
};

export default TodoList;
