import React from 'react';
import {
  BallContainer,
  GameContainer,
  LeftContainer,
  PongContainer,
  RightContainer
} from './styles';
import Instructions from '../Instructions';
import Score from '../Score';

const Game = () => {
  return (
    <GameContainer>
      <Score />

      <PongContainer>
        <LeftContainer>Left</LeftContainer>
        <BallContainer>Ball</BallContainer>
        <RightContainer>Right</RightContainer>
      </PongContainer>

      <Instructions />
    </GameContainer>
  );
};

export default Game;
