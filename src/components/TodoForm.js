import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");

 
  };
  return (
    <div className="container">
      <form className="todo-form form-control card" onSubmit={handleSubmit}>
        <textarea
          type="text-area"
          className="todo-input form-control"
          placeholder="Add a task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          rows={3}
         />
        <button type="submit" className="form-control btn btn-warning"> ✍ Add Task </button>
      </form>
    </div>
  );
};
