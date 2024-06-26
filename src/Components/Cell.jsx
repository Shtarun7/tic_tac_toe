import { useConfig } from "../context/ConfigurationContext";

const Cell = ({ rowNum, colNum }) => {
  const {
    state,
    setState,
    player,
    setPlayer,
    winner,
    setWinner,
    setPlayer1Score,
    setPlayer2Score,
  } = useConfig();

  const onWin = () => {
    console.log(`player ${player} won`);
    setWinner(player);
    if (player == 1) {
      setPlayer1Score((prev) => prev + 1);
    }
    if (player == 2) {
      setPlayer2Score((prev) => prev + 1);
    }
    return;
  };
  const decideWinner = (key) => {
    let win = 1;
    //HORIZONTAL
    for (let j = 0; j < 3; j++) {
      if (state[rowNum][j] != key) {
        win = 0;
        break;
      }
    }

    if (win) {
      onWin();
    } else {
      win = 1;
    }
    //VERTICAL
    for (let i = 0; i < 3; i++) {
      console.log(`rownum ${rowNum} colnum ${colNum}key is ${key} `);
      if (state[i][colNum] != key) {
        console.log(
          `failed rownum ${i} colnum ${colNum} and cellvalue=${state[i][colNum]} `
        );
        win = 0;
        break;
      }
    }

    if (win) {
      onWin();
    } else {
      win = 1;
    }
    //LEFT DIAGONAL
    for (let i = 0, j = 0; i < 3, j < 3; i++, j++) {
      console.log(`rownum ${i} colnum ${j}key is ${key} `);
      if (state[i][j] != key) {
        console.log(
          `left diagonal failed rownum ${i} colnum ${j} and cellvalue=${state[i][j]} `
        );
        win = 0;
        break;
      }
    }

    if (win) {
      onWin();
    } else {
      win = 1;
    }

    //RIGHT DIAGONAL
    for (let i = 0, j = 2; i < 3, j >= 0; i++, j--) {
      console.log(`rownum ${rowNum} colnum ${colNum}key is ${key} `);
      if (state[i][j] != key) {
        console.log(
          `failed rownum ${rowNum} colnum ${colNum} and cellvalue=${state[i][colNum]} `
        );
        win = 0;
        break;
      }
    }

    if (win) {
      onWin();
    } else {
      win = 1;
    }
  };
  const handleClick = () => {
    if (state[rowNum][colNum]) return;
    const updatedState = [...state];
    updatedState[rowNum][colNum] = player == 1 ? "X" : "0";
    setState(updatedState);
    decideWinner(player == 1 ? "X" : "0");
    player == 1 ? setPlayer(2) : setPlayer(1);
  };
  return (
    <div
      className="cell h-[70%]  w-[20%] flex items-center justify-center border border-gray-800 bg-orange-800 rounded-xl"
      onClick={handleClick}
    >
      <h5 className="text-4xl text-white">
        {state[rowNum][colNum] != null ? state[rowNum][colNum] : ""}
      </h5>
    </div>
  );
};

export default Cell;
