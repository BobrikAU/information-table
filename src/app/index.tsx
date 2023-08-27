import React, { useState } from "react";
import "./index.scss";
import { Table } from "../widjets/table";
import { getLocation, getCharacter } from "../shared/api";

function App() {
  return (
    <div className="App">
      <h1 style={{ fontWeight: "400" }}>Таблица</h1>
      <Table getDataReqest={getCharacter} />
    </div>
  );
}

export default App;
