import { useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { todoListState, filterState, filteredTodoList } from "./store";

const Todo = () => {
  const [todo, setTodo] = useState("");

  const setTodoList = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(filteredTodoList);
  const [filter, setFilter] = useRecoilState(filterState);

  const handleComplete = (id) => {
    setTodoList((prevList) => {
      const index = prevList.findIndex((t) => t.id === id);
      const newList = [...prevList];
      newList[index] = {
        ...prevList[index],
        completed: !prevList[index].completed,
      };

      return newList;
    });
  };
  function handleAdd() {
    setTodoList((prevList) => [
      ...prevList,
      {
        id: Math.random().toString(20),
        title: todo,
        completed: false,
      },
    ]);

    setTodo("");
  }

  console.log(todoList);

  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        Todo list{" "}
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => {
            console.log(e.target.value);
            return setFilter(e.target.value);
          }}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
      {todoList.map((todo, index) => (
        <div key={index}>
          {todo.title}
          <input
            type="checkbox"
            name=""
            id=""
            value={todo.completed ?? false}
            checked={todo.completed ?? false}
            onChange={() => handleComplete(todo.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
