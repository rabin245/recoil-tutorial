import { atom, selector } from "recoil";

const counterState = atom({
  key: "CounterState",
  default: 0,
});

const isCounterEven = selector({
  key: "IsCounterEven",
  get: ({ get }) => {
    const count = get(counterState);

    return count % 2 === 0;
  },
});

const todoListState = atom({
  key: "TodoListState",
  default: [],
});

const filterState = atom({
  key: "FilterState",
  default: "All",
});

const filteredTodoList = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const filter = get(filterState);

    switch (filter) {
      case "Completed":
        return todoList.filter((t) => t.completed);
      case "Uncompleted":
        return todoList.filter((t) => !t.completed);
      default:
        return todoList;
    }
  },
});

export {
  counterState,
  isCounterEven,
  todoListState,
  filterState,
  filteredTodoList,
};
