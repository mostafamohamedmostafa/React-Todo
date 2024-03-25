import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import todopic from "../img/todoapp.png";
import { EditTodoForm } from "./EditTodoForm";

uuidv4();
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  // Add todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="container text-center todo-wrapper">
      <div className="card">
        <img className="img-fluid" src={todopic}></img>
        <div className="card-body">
          <h1 className="card-title">💬 Todo Form</h1>
          <p className="card-text">
            <TodoForm addTodo={addTodo}></TodoForm>
          </p>
        </div>

        <div className="card-body">
          {/* map through todos and display them */}
          {todos.map((todo, index) =>
            todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo}></EditTodoForm>
            ) : (
              <Todo
                task={todo}
                key={index}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              ></Todo>
            )
          )}
        </div>
      </div>
    </div>
  );
};
