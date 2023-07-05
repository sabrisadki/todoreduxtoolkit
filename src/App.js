import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Input from "./component/input/Input";
import "./App.css";
import TodoItem from "./component/todoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./storereducer/TodoSlice";
import Navbars from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  const todoList = useSelector(selectTodoList);
  const [word, setWord] = useState("");

  return (
    <div className="app">
      <div className="app-container">
        <Navbars setWord={setWord} word={word} />
        
            <div className="todo-container">
              {todoList.map((item) => (
                <TodoItem
                  key={item.id}
                  name={item.item}
                  done={item.done}
                  id={item.id}
                />
              ))}
            </div>
     
        <Input />
      </div>
    </div>
  );
};

export default App;
