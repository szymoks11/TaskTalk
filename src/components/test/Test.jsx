import React from 'react';
import {Helmet} from "react-helmet";
import './style.css';

const Test = () => {
  return (
    
    <div className="application">
        <Helmet>
          <script src="./script.js"></script>
            </Helmet>
           
      <form>
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    <div className="todo-container">
      <ul className="todo-list"></ul>
    </div>
    
    </div>
  );
};

export default Test;
