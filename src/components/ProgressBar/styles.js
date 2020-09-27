import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  bottom: 0;
  position: fixed;
  width: 100%;
  background-color: #fff;
`;

export const CircularProgressBarContainer = styled.div`
  width: 200px;
  svg {
    height: 100px;
  }
`;

export const Button = styled.button`
  background-color: #03a9f4;
  color: #fff;
  border-radius: 20px;
  padding: 10px;
  text-transform: uppercase;
  border: none;
  cursor: ${(props) => (props.isCompleted ? 'pointer' : 'not-allowed')};
  opacity: ${(props) => (props.isCompleted ? 1 : 0.5)};
  &:hover {
    background-color: ${(props) => props.isCompleted && 'rgb(0, 123, 255)'};
  }
`;
