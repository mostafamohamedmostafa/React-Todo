import React, { useState } from "react";

export const EditTodoForm = ({ editTodo,task}) => {
    
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue("");

 
  };
  return (
    <div className="container">
      <form className="todo-form form-control card" onSubmit={handleSubmit}>
        <textarea
          type="text-area"
          className="todo-input form-control"
          placeholder="Update a task"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          rows={3}
         />
        <button type="submit" className="form-control btn btn-warning"> ✍ Update Task </button>
      </form>
    </div>
  );
};
