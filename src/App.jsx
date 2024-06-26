import Board from "./Components/Board";
import { useConfig } from "./context/ConfigurationContext";

function App() {
  const {
    player1Score,
    player2Score,
    setPlayer1Score,
    setPlayer2Score,
    setStarted,
    setState,
    setPlayer,
    setWinner,
  } = useConfig();
  const handlePlay = () => {
    setStarted(true);
    const newState = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    setState(newState);
    setPlayer(1);
    setWinner(null);
  };
  const handleNewGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    handlePlay();
  };
  return (
    <div className="w-full h-screen flex flex-col items-center   bg-red-700  ">
      <div className="board w-[70%] h-[80%] flex items-center justify-center gap-10 ">
        <div className="player1-score bg-orange-500 w-[20%] h-[40%] rounded-tr-3xl rounded-b-3xl flex flex-col justify-center items-center text-4xl">
          <h2 className="text-bold text-white">Player 1</h2>
          <h2 className="text-bold text-white"> Score</h2>
          <h2 className="text-bold text-white"> {player1Score}</h2>
        </div>
        <Board />
        <div className="player2-score bg-orange-500 w-[20%] h-[40%] rounded-tr-3xl rounded-b-3xl flex flex-col justify-center items-center text-4xl">
          <h2 className="text-bold text-white">Player 2</h2>
          <h2 className="text-bold text-white"> Score</h2>
          <h2 className="text-bold text-white"> {player2Score}</h2>
        </div>
      </div>
      <div className="buttons flex justify-center gap-2 w-[60%] h-[10%]">
        <button
          className="bg-orange-500 w-[20%] h-[50%] rounded-xl font-semibold text-white "
          onClick={handlePlay}
        >
          Play
        </button>
        <button
          className="bg-orange-500 w-[20%] h-[50%] rounded-xl font-semibold text-white"
          onClick={handleNewGame}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
