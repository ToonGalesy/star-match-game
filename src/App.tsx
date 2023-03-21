import React, { useState } from 'react';
import './App.css';
import StarMatchGame from './components/StarMatchGame';

function App() {
  const [gameId, setGameId] = useState(1);

  return (
    <StarMatchGame key={gameId} startNewGame={() => setGameId(gameId + 1)}/>
  );
}

export default App;
