import { useState } from "react";
import { calculateWinner } from "../utilities/utility";

export const Playground = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleBoardClick = (i) => {
    if (board[i] || winner) return; //if box already has a value or winner is there 
    let newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext((prev) => !prev);
  };

  const handleResetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl font-extrabold text-blue-500">Tic Tac Toe Game</h1>
      {winner && <p className="mt-6 font-bold text-2xl">Winner: {winner} </p>}

      <div className="grid grid-cols-3 gap-2 my-6">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleBoardClick(index)}
            className="w-25 h-25 text-5xl font-bold flex items-center justify-center border border-gray-500"
            style={{color : value === "X" ? "red" : value === "O" ? "black" : "inherit"}}
          >
            {value}
          </button>
        ))}
      </div>

      <button
        className="bg-blue-400  py-2 px-4 rounded text-white"
        onClick={handleResetBoard}
      >
        Reset
      </button>
    </div>
  );
};
