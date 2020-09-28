/* Drawing functions */

// function to draw paddle
export const drawPaddle = (ctx, x, y, width, height, color, radius = 20) => {
  ctx.fillStyle = color;
  // ctx.fillRect(x, y, width, height);
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fill();
};

// function to draw ball
export const drawBall = (ctx, x, y, radius, color) => {
  ctx.fillStyle = color;
  ctx.beginPath();

  ctx.arc(x, y, radius, 0, Math.PI * 2, true); // π * 2 Radians = 360 degrees
  ctx.closePath();
  ctx.fill();
};

/* End Drawing functions */

/* Ball position functions */

// Reset the ball
export const reset = (ball, canvasWidth, canvasHeight) => {
  // reset ball's value to older values
  ball.x = canvasWidth / 2;
  ball.y = canvasHeight / 2;
  ball.speed = 5;

  // changes the direction of ball
  ball.velocityX = -ball.velocityX;
  ball.velocityY = -ball.velocityY;
};

// Collision Detect function
export const collisionDetect = (player, ball) => {
  // returns true or false
  player.top = player.y;
  player.right = player.x + player.width;
  player.bottom = player.y + player.height;
  player.left = player.x;

  ball.top = ball.y - ball.radius;
  ball.right = ball.x + ball.radius;
  ball.bottom = ball.y + ball.radius;
  ball.left = ball.x - ball.radius;

  return (
    ball.left < player.right &&
    ball.top < player.bottom &&
    ball.right > player.left &&
    ball.bottom > player.top
  );
};
