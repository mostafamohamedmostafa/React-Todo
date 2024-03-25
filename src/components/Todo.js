import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {

  return (
    <div className="Todo container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className={`${task.completed ? "completed" : "incompleted"}`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.task} {" "}
              </h5>
            </div>
          </div>
          <div className="col-md-4">
            <FontAwesomeIcon  className="edit-icon btn btn-warning " icon={faPenToSquare} onClick={() => editTodo(task.id)} />

            <FontAwesomeIcon
              className="delete-icon btn btn btn-danger"
              icon={faTrash}
              onClick={() => deleteTodo(task.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
