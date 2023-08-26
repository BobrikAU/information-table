import React from "react";
import "./index.scss";
import { getLocation } from "../shared/api";

function App() {
  getLocation();
  return (
    <div className="App">
      <h1 style={{ fontWeight: "400" }}>Таблица</h1>
    </div>
  );
}

export default App;
