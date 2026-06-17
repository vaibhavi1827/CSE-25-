import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>React Counter Application</h1>

      <h2 className="counter">{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          Increment (+)
        </button>

        <button onClick={() => setCount(count - 1)}>
          Decrement (-)
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

      <p className="footer">vaibhavi goswami  2503201001276</p>
    </div>
  );
}

export default App;