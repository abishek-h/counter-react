import "./App.css";
import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(Count + 1);
  };
  const handleSub = () => {
    setCount(Count - 1);
  };
  const handleClear = () => {
    setCount(0);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="element name">Clicker</div>
        <div className="element buttons">
          <button onClick={handleAdd} className="button enabled">
            <span>+</span>
          </button>
          <button
            disabled={Count === 0}
            onClick={handleSub}
            className={"button " + (Count === 0 ? "disabled" : "enabled")}
          >
            <span>-</span>
          </button>
          <button
            onClick={handleClear}
            className={"button " + (Count === 0 ? "disabled" : "enabled")}
          >
            <span>x</span>
          </button>
        </div>
        {Count === 0 ? (
          <div style={{ fontSize: "5vw" }} className="element result">
            Click add button to start!
          </div>
        ) : (
          <div className="element result">{Count}</div>
        )}
      </div>
    </div>
  );

  // k ezz now wot need to learn
}

export default App;
