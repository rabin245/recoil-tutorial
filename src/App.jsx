import { useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState, isCounterEven } from "./store";
import Todo from "./Todo";

function App() {
  const [count, setCount] = useRecoilState(counterState);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>

      <div>
        <Child />
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
}

function Child() {
  const count = useRecoilValue(counterState);
  const isCountEven = useRecoilValue(isCounterEven);

  return (
    <div>
      <h1>Counter from child</h1>
      <p>{count}</p>
      <p>Even: {isCountEven.toString()}</p>
    </div>
  );
}

export default App;
