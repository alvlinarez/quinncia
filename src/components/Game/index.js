import React, { useState } from 'react';
import { GameContainer } from './styles';
import Instructions from '../Instructions';
import Score from '../Score';
import Canvas from '../Canvas';

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 250;

const Game = () => {
  const [userScore, setUserScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  return (
    <GameContainer>
      <Score userScore={userScore} aiScore={aiScore} />

      <Canvas
        userScore={userScore}
        setUserScore={setUserScore}
        aiScore={aiScore}
        setAiScore={setAiScore}
      />

      <Instructions />
    </GameContainer>
  );
};

export default Game;
