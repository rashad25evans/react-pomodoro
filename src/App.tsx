import React from "react";
import Break from "./components/Break/Break";
import Session from "./components/Session/Session";
import Timer from "./components/Timer/Timer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Break />
      <Session />
      <Timer />
    </div>
  );
}

export default App;
