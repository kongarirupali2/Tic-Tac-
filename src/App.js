import React, { useState, useEffect } from 'react';
import SquareComponent from './SquareComponent';

const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXChance, updateIsXChance] = useState(false);

  const onSquareClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index])
      return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance)
    updateGameState(strings)
  }

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      alert(`Ta da ! ${winner} has won the game!`);
      updateGameState(initialState);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  return (
    <div className="app-header">
      <p className='heading-text'>React Tic Tac Toe Game - 2020</p>
      <div className='row js-center'>
        <SquareComponent className="b-bottom-right" onClick={() => onSquareClicked(0)} state={gameState[0]} />
        <SquareComponent className="b-bottom-right" onClick={() => onSquareClicked(1)} state={gameState[1]} />
        <SquareComponent className="b-bottom" onClick={() => onSquareClicked(2)} state={gameState[2]} />
      </div>
      <div className='row js-center'>
        <SquareComponent className="b-bottom-right" onClick={() => onSquareClicked(3)} state={gameState[3]} />
        <SquareComponent className="b-bottom-right" onClick={() => onSquareClicked(4)} state={gameState[4]} />
        <SquareComponent className="b-bottom" onClick={() => onSquareClicked(5)} state={gameState[5]} />
      </div>
      <div className='row js-center'>
        <SquareComponent className="b-right" onClick={() => onSquareClicked(6)} state={gameState[6]} />
        <SquareComponent className="b-right" onClick={() => onSquareClicked(7)} state={gameState[7]} />
        <SquareComponent onClick={() => onSquareClicked(8)} state={gameState[8]} />
      </div>
      <button className='clear-button' onClick={() => updateGameState(initialState)}>Clear Game</button>
      <p className='fc-aqua fw-600'>Rupali Kongari</p>
    </div>
  );

}
export default App;
