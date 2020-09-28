import React, { useEffect, useRef, useState } from 'react';
import { CanvasStyles } from './styles';
import {
  collisionDetect,
  drawBall,
  drawPaddle,
  keyDownHandler,
  keyUpHandler,
  reset
} from '../../utils/canvas';

const CANVAS_WIDTH = 400,
  CANVAS_HEIGHT = 250,
  PADDLE_WIDTH = 10,
  PADDLE_HEIGHT = 50;

const Canvas = ({ userScore, setUserScore, aiScore, setAiScore }) => {
  const canvasRef = useRef(null);

  let upArrowPressed = false,
    downArrowPressed = false;

  const user = {
    x: 10,
    y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color: '#03A9F4',
    score: 0
  };

  const ai = {
    x: CANVAS_WIDTH - (PADDLE_WIDTH + 10),
    y: CANVAS_HEIGHT / 2 - PADDLE_HEIGHT / 2,
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color: '#7e8a97',
    score: 0
  };

  const ball = {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2,
    radius: 7,
    speed: 5,
    velocityX: 5,
    velocityY: 5,
    color: 'rgb(0, 123, 255)'
  };

  // gets activated when user press down a key
  const keyDownHandler = (event) => {
    // get the keyCode
    switch (event.keyCode) {
      // "up arrow" key
      case 38:
        upArrowPressed = true;
        break;
      // "down arrow" key
      case 40:
        downArrowPressed = true;
        break;
      default:
        break;
    }
  };

  // gets activated when user release the key
  const keyUpHandler = (event) => {
    switch (event.keyCode) {
      // "up arrow" key
      case 38:
        upArrowPressed = false;
        break;
      // "down arrow" key
      case 40:
        downArrowPressed = false;
        break;
      default:
        break;
    }
  };

  // update function, to update user & ai paddles and ball positions
  const update = () => {
    // move the paddle
    if (upArrowPressed && user.y > 0) {
      user.y -= 8;
    } else if (downArrowPressed && user.y < CANVAS_HEIGHT - user.height) {
      user.y += 8;
    }

    // check if ball hits top or bottom wall
    if (ball.y + ball.radius >= CANVAS_HEIGHT || ball.y - ball.radius <= 0) {
      ball.velocityY = -ball.velocityY;
    }

    // if ball hit on right wall
    if (ball.x + ball.radius >= CANVAS_WIDTH) {
      // then user scored 1 point
      user.score += 1;
      setUserScore((userScore) => userScore + 1);
      reset(ball, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    // if ball hit on left wall
    if (ball.x - ball.radius <= 0) {
      // then ai scored 1 point
      ai.score += 1;
      setAiScore((aiScore) => aiScore + 1);
      reset(ball, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    // move the ball
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    // ai paddle movement
    ai.y += (ball.y - (ai.y + ai.height / 2)) * 0.09;

    // collision detection on paddles
    let player = ball.x < CANVAS_WIDTH / 2 ? user : ai;

    if (collisionDetect(player, ball)) {
      // default angle is 0deg in Radian
      let angle = 0;

      // if ball hit the top of paddle
      if (ball.y < player.y + player.height / 2) {
        // then -1 * Math.PI / 4 = -45deg
        angle = (-1 * Math.PI) / 4;
      } else if (ball.y > player.y + player.height / 2) {
        // if it hit the bottom of paddle
        // then angle will be Math.PI / 4 = 45deg
        angle = Math.PI / 4;
      }

      /* change velocity of ball according to on which paddle the ball hitted */
      ball.velocityX =
        (player === user ? 1 : -1) * ball.speed * Math.cos(angle);
      ball.velocityY = ball.speed * Math.sin(angle);

      // increase ball speed
      ball.speed += 0.2;
    }
  };

  const render = (context, canvas) => {
    // Background color
    context.fillStyle = '#e8e8e8';
    // draws the gray board
    context.fillRect(0, 0, canvas.width, canvas.height);

    // draw user paddle
    drawPaddle(context, user.x, user.y, user.width, user.height, user.color);
    // draw ai paddle
    drawPaddle(context, ai.x, ai.y, ai.width, ai.height, ai.color);
    // draw ball
    drawBall(context, ball.x, ball.y, ball.radius, ball.color);
  };

  useEffect(() => {
    // assign ref to canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // When user press up/down key
    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);

    // Start the game
    const startGame = setInterval(() => {
      render(context, canvas);
      // Whoever gets 5, wins
      if (ai.score < 5 && user.score < 5) {
        // Update positions if there is no winner yet
        update();
      } else {
        context.font = '50px Comic Sans MS';
        context.fillStyle = 'rgb(0, 123, 255)';
        context.textAlign = 'center';
        context.fillText(
          ai.score === 5 ? 'You lose :(' : 'You win :)',
          canvas.width / 2,
          canvas.height / 2
        );
      }
    }, 1000 / 60);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      window.removeEventListener('keyup', keyUpHandler);
      clearInterval(startGame);
    };
  }, []);

  return (
    <CanvasStyles
      ref={canvasRef}
      id="canvas"
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
    />
  );
};

export default Canvas;
