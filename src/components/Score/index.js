import React from 'react';
import { AiScoreSpan, ScoreContainer, UserScoreSpan } from './styles';

const Score = ({ userScore = 0, aiScore = 0 }) => {
  return (
    <ScoreContainer>
      <UserScoreSpan>
        Matt <strong>{userScore}</strong>
      </UserScoreSpan>
      <AiScoreSpan>
        {' '}
        : <strong>{aiScore}</strong> Quinn
      </AiScoreSpan>
    </ScoreContainer>
  );
};

export default Score;
