import React from "react";

const Todo = ({ todo, todoDelete, todoToogleCompled }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-right">
          {todo.title}
          <buttom
            onClick={() => todoToogleCompled(todo.id)}
            className={`btn btn-sm ${
              todo.completed ? "btn-outline-success" : "btn-success"
            }  ml-2`}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </buttom>
        </h3>

        <p className="card-text text-right">{todo.descripction}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <buttom className="btn btn-sm btn-outline-primary mr-2">
            Editar
          </buttom>
          <buttom
            className="btn btn-sm btn-outline-danger"
            onClick={() => todoDelete(todo.id)}
          >
            Eliminar
          </buttom>
        </div>
      </div>
    </div>
  );
};

export default Todo;
