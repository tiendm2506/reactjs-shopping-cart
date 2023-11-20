import React, { useState } from "react";
import TodoList from "./../../components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: "Eat", status: "new" },
    { id: 2, title: "Sleep", status: "completed" },
    { id: 3, title: "Code", status: "new" },
  ];
  const [todoList, settodoList] = useState(initTodoList);
  const handleClickTodoItem = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...newTodoList[index],
      status: todo.status === "new" ? "completed" : "new",
    };
    settodoList(newTodoList);
  };
  const [filterStataus, setFilterStataus] = useState("all");
  const handleShowFilter = (status) => {
    setFilterStataus(status);
  };
  const todoListFilter = todoList.filter((todo) => {
    return filterStataus === "all" || todo.status === filterStataus;
  });
  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={todoListFilter} onClickTodo={handleClickTodoItem} />
      <ul className="list-btn">
        <li>
          <button onClick={() => handleShowFilter("all")}>Show All</button>
        </li>
        <li>
          <button onClick={() => handleShowFilter("completed")}>
            Show Completed
          </button>
        </li>
        <li>
          <button onClick={() => handleShowFilter("new")}>Show New</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoFeature;
