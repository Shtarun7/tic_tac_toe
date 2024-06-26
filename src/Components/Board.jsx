import Row from "./Row";
import { useConfig } from "../context/ConfigurationContext.jsx";

const Board = () => {
  const { player, winner, started } = useConfig();

  return (
    <div
      className={`w-[40%] h-[70%] flex flex-col gap-2 rounded-xl items-center bg-[rgb(249,200,148)] ${
        winner ? "pointer-events-none" : ""
      } ${started ? "pointer-events-auto" : "pointer-events-none"} `}
    >
      {!started && <h2 className="text-2xl mb-2">Press Play To Start</h2>}
      {started && !winner && <h2 className="text-2xl mb-2">Player {player}</h2>}
      {winner && <h2 className="text-2xl mb-2">Player {winner} Won!!</h2>}
      <Row rowNum={0} />
      <Row rowNum={1} />
      <Row rowNum={2} />
    </div>
  );
};

export default Board;
