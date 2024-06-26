import { createContext, useContext, useState } from "react";

const ConfigurationContext = createContext();

const ConfigurationProvider = ({ children }) => {
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [started, setStarted] = useState(false);
  const [state, setState] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  return (
    <ConfigurationContext.Provider
      value={{
        state,
        setState,
        player,
        setPlayer,
        winner,
        setWinner,
        player1Score,
        player2Score,
        setPlayer1Score,
        setPlayer2Score,
        started,
        setStarted,
      }}
    >
      {children}
    </ConfigurationContext.Provider>
  );
};

const useConfig = () => {
  return useContext(ConfigurationContext);
};
export { ConfigurationProvider, useConfig };
