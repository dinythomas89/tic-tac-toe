import React, {useState} from "react";
import Square from "./Square";

const Board = () => {
  const initialSquareValues=[null,null,null,null,null,null,null,null,null,]
  const [squares, setSquares]=useState(initialSquareValues)
  const renderSquare = (i) => {
    return <Square value={squares[i]} />;
  };

  return (
    <div className="container">
      <h2>Tic-Tac-Toe</h2>
      <div className="board">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className="board">
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
};

export default Board;
