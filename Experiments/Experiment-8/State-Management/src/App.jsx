import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-box">

        <h1>React Counter Application</h1>

        <h2>{count}</h2>

        <div className="button-group">
          <button onClick={increment}>
            Increment (+)
          </button>

          <button onClick={decrement}>
            Decrement (-)
          </button>
        </div>

        <button className="reset-btn" onClick={reset}>
          Reset
        </button>

      </div>
    </div>
  );
}

export default App;