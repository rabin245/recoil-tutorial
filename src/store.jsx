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

const posts = atom({
  key: "Posts",
  default: [],
  effects: [
    ({ setSelf, trigger }) => {
      if (trigger === "get") {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => setSelf(data.splice(0, 3)));
      }
    },
    ({ onSet }) => {
      onSet((newPosts) => {
        console.log("setting new value", newPosts);
      });
    },
  ],
});

// const posts = atom({
//   key: "Posts",
//   default: selector({
//     key: "Posts/Default",
//     get: async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       const data = await res.json();

//       return data.splice(0, 3);
//     },
//   }),
// });

export {
  counterState,
  isCounterEven,
  todoListState,
  filterState,
  filteredTodoList,
  posts,
};
