import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const updateDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const updateCompleted = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button onClick={updateCompleted} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={updateDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
