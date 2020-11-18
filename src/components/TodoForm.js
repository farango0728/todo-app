import React from "react";

const TodoForm = () => {
  return (
    <div>
      <h1>Nueva Tarea</h1>
      <form>
        <input type="text" placeholder="Titulo" className="form-control" />
        <textarea
          placeholder="Descripcion"
          className="form-control mt-2"
        ></textarea>
        <button className="btn btn-primary btn-block mt-2">
          Agregar Tarea
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
