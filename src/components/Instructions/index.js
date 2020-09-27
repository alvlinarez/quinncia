import React from 'react';
import { InstructionsContainer } from './styles';

const Instructions = () => {
  return (
    <InstructionsContainer>
      <p>Try to beat Quinn while we analyse your resume. Use arrow keys.</p>
      <span>
        <i className="far fa-arrow-alt-circle-up" />
      </span>
      <span>
        <i className="far fa-arrow-alt-circle-down" />
      </span>
    </InstructionsContainer>
  );
};

export default Instructions;
