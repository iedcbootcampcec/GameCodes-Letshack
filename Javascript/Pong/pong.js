const BALL_SIZE = 10;
const THEME_COLOR = "#FFF";
const BG_COLOR = "#000";

const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");

const user = {
  x: 0,
  y: cvs.height / 2 - 100 / 2,
  width: 10,
  height: 100,
  color: THEME_COLOR,
  score: 0
};

const com = {
  x: cvs.width - 10,
  y: cvs.height / 2 - 100 / 2,
  width: 10,
  height: 100,
  color: THEME_COLOR,
  score: 0
};

const ball = {
  x: cvs.width / 2,
  y: cvs.height / 2,
  radius: BALL_SIZE / 2,
  speed: 5,
  velocityX: 5,
  velocityY: 5,
  color: THEME_COLOR
};

const net = {
  x: cvs.width / 2 - 1,
  y: 0,
  width: 2,
  height: 10,
  color: THEME_COLOR
};

// Draw rect function
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

function drawBall(x, y, r = 10, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, r, r);
}

function drawText(text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = "45px sans-serif";
  ctx.fillText(text, x, y);
}


function drawNet() {
  for (let i = 0; i < cvs.height; i += 15) {
    drawRect(net.x, net.y + i, net.width, net.height, net.color);
  }
}

/**
 * Find for a collision between the paddle and the ball
 */
function collision(ball, player) {
  ball.top = ball.y - ball.radius;
  ball.bottom = ball.y + ball.radius;
  ball.left = ball.x - ball.radius;
  ball.right = ball.x + ball.radius;

  player.top = player.y;
  player.bottom = player.y + player.height;
  player.left = player.x;
  player.right = player.x + player.width;


  return ball.right > player.left
    && ball.bottom > player.top
    && ball.left < player.right
    && ball.top < player.bottom;
}

function movePaddle(e) {
  let rect = cvs.getBoundingClientRect();
  user.y = e.clientY - rect.top - user.height / 2;
}

function render(params) {
  drawRect(0, 0, cvs.width, cvs.height, BG_COLOR);
  drawNet();

  // User Score
  drawText(user.score, cvs.width / 4, cvs.height / 5, THEME_COLOR);

  // Com Score
  drawText(com.score, 3 * cvs.width / 4, cvs.height / 5, THEME_COLOR);

  // Draw user and com paddle
  drawRect(user.x, user.y, user.width, user.height, user.color);
  drawRect(com.x, com.y, com.width, com.height, com.color);

  drawBall(ball.x, ball.y, BALL_SIZE, THEME_COLOR);

}

function resetBall() {
  ball.x = cvs.width / 2;
  ball.y = cvs.height / 2;
  ball.speed = 5;
  ball.velocityX = -ball.velocityX;
  ball.velocityY = 5;
}

function update() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // COM player AI
  let computerLevel = 0.1;
  com.y += (ball.y - (com.y + com.height / 2)) * computerLevel;

  if (ball.y + ball.radius / 2 > cvs.height || ball.y - ball.radius < 0) {
    ball.velocityY = -ball.velocityY;
  }

  // Determine which player is hitting the ball
  let player = (ball.x < cvs.width / 2) ? user : com;

  if (collision(ball, player)) {
    let collidePoint = ball.y - (player.y + player.height);

    collidePoint = collidePoint / (player.height / 2);

    // Calc angle
    let angleRad = collidePoint * Math.PI / 4;

    let direction = (ball.x < cvs.width / 2) ? 1 : -1;

    // change vel X and Y
    ball.velocityX = direction * ball.speed * Math.cos(angleRad);
    ball.velocityY = ball.speed * Math.sin(angleRad);

    ball.speed += 0.5;
  }

  if (ball.x - ball.radius < 0) {
    com.score++;
    resetBall();
  } else if (ball.x + ball.radius > cvs.width) {
    user.score++;
    resetBall();
  }
}

function game() {
  update();
  render();
}


// Control the user paddle
cvs.addEventListener("mousemove", movePaddle);

// loop
const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond)