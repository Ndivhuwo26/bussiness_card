import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      {/* Business Logo */}
      <div className="logo-container">
        <img src="/lc%201.PNG" alt="H&N Transport Solutions Logo" className="business-logo" />
      </div>

      <h1>H&N TRANSPORT SOLUTIONS</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
