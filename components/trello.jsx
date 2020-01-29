import React from "react";
import data from "../data/data.json";
import Board from "react-trello";


const Trello = () => {
    return (
      <div className="App">
        <h1>react-trello demo</h1>
        <Board data={data} draggable />
      </div>
    );
}

export default Trello;
  