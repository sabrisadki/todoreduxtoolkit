import React from "react";
import { useDispatch } from "react-redux";
import { setCheck, deleteTodo, editTodo } from "../../storereducer/TodoSlice";
import "./TodoItem.css";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleEdit = () => {
    const newItem = prompt("item", name);
    if (newItem) {
      dispatch(editTodo({ id, item: newItem }));
    }
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        checked={done}
        onChange={handleCheck}
      />
      <label htmlFor={id} className={done ? "active" : ""}>
        {name}
      </label>
      <button type="button" onClick={handleEdit} className="cssbuttons-io-button">
        edit
      </button>
      <button type="button" onClick={handleDelete} className="cssbuttons-io-button">
        delete
      </button>
    </div>
  );
};

export default TodoItem;
