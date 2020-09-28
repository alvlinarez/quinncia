import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Button,
  CircularProgressBarContainer,
  ProgressBarContainer
} from './styles';

const ProgressBar = ({ completed, setCompleted }) => {
  // Routing
  const history = useHistory();
  // Progressbar will end in 25s
  const TIME_PERCENTAGE = 250;
  // State for Progressbar time
  const [time, setTime] = useState({
    timer: 0,
    timeLeft: 100
  });
  // Percentage of progressbar
  const [percentage, setPercentage] = useState(0);

  const startProgressBar = async () => {
    let { timer } = time;
    setTime({
      ...time,
      timeLeft: time.timeLeft - timer
    });
    setPercentage(timer);
    const percentageInterval = setInterval(() => {
      timer++;
      setTime({
        ...time,
        timeLeft: time.timeLeft - timer
      });
      setPercentage(timer);
      if (timer === time.timeLeft) {
        clearInterval(percentageInterval);
        // Loading completed
        setCompleted(true);
      }
    }, TIME_PERCENTAGE);
  };

  useEffect(() => {
    startProgressBar();
  }, []);

  const handleClickButton = () => {
    if (!completed) return;
    history.push('/resume');
  };

  return (
    <ProgressBarContainer>
      <CircularProgressBarContainer>
        <CircularProgressbar
          value={percentage}
          maxValue={100}
          text={`${percentage}%`}
        />
      </CircularProgressBarContainer>

      <Button isCompleted={completed} onClick={handleClickButton}>
        View Resume Analysis
      </Button>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
