import React, { useState } from "react";
import "./index.scss";
import { SetContent, SetNumberRowsPerPage } from "../features/select";

function App() {
  const [numberRowsPerPage, setNumberRowsPerPage] = useState("15");
  const [content, setContent] = useState("Location");
  return (
    <div className="App">
      <SetNumberRowsPerPage
        currentValue={numberRowsPerPage}
        changeCurrentValue={setNumberRowsPerPage}
      />
      <SetContent currentValue={content} changeCurrentValue={setContent} />
      <h1 style={{ fontWeight: "400" }}>Таблица</h1>
    </div>
  );
}

export default App;
