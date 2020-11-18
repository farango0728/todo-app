import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialTodos = [
  { id: 1, title: "todo # 1", descripction: "descripcion 1", completed: false },
  { id: 2, title: "todo # 2", descripction: "descripcion 2", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(changedTodos);
  };

  const todoToogleCompled = (todoId) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(changedTodos);
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleCompled={todoToogleCompled}
          />
        </div>
        <div className="col-4">
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export default App;
