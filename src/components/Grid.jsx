import { useCallback, useState } from "react";
import Card from "./Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isWinner(board, symbol) {
  if (board[0] == board[1] && board[1] == board[2] && board[2] == symbol)
    return symbol;
  if (board[3] == board[4] && board[4] == board[5] && board[5] == symbol)
    return symbol;
  if (board[6] == board[7] && board[7] == board[8] && board[8] == symbol)
    return symbol;

  if (board[0] == board[3] && board[3] == board[6] && board[6] == symbol)
    return symbol;
  if (board[1] == board[4] && board[4] == board[7] && board[7] == symbol)
    return symbol;
  if (board[2] == board[5] && board[5] == board[8] && board[8] == symbol)
    return symbol;

  if (board[0] == board[4] && board[4] == board[8] && board[8] == symbol)
    return symbol;
  if (board[2] == board[4] && board[4] == board[6] && board[6] == symbol)
    return symbol;
  return "";
}

const Grid = ({ cardnumber }) => {
  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(cardnumber).fill(""));
  const [winner, setWinner] = useState("");
  const play = useCallback(
    function playCallback(index) {
      if (turn == true) {
        board[index] = "O";
      } else {
        board[index] = "X";
      }
      const win = isWinner(board, turn ? "O" : "X");
      if (win) {
        setWinner(win);
        toast.success(`Congratulation ${win} the game.`);
      }
      setBoard([...board]);
      setTurn(!turn);
    },
    [turn]
  );
  function reset() {
    setBoard(Array(cardnumber).fill(""));
    setWinner(null);
    setTurn(true);
  }
  return (
    <>
      {winner && (
        <>
          <h1>Winner: {winner}</h1>
          <button className="reset" onClick={reset}>
            Reset Game
          </button>

          <ToastContainer position="top-left" />
        </>
      )}
      <h1>Current turn :{turn ? "O" : "X"}</h1>
      <div className="cards">
        {board.map((value, idx) => {
          return (
            <Card
              gameEnd={winner ? true : false}
              onPlay={play}
              player={value}
              key={idx}
              index={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default Grid;
