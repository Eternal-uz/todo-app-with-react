import React from "react";

const Form = ({ setInputText, inputText,setTodos, todos, setStatus }) => {
  const updateInput = (e) => {
    setInputText(e.target.value);
  };
  const updateTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000}]);
    setInputText(' ')
  };

  const updateStatus = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form> 
      <input value={inputText} type="text" className="todo-input" onChange={updateInput} />
      <button onClick={updateTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={updateStatus} name="todos">
          <option value="all" className="filter-todo">
            All
          </option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
