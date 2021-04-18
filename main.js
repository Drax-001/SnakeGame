import {update as updateSnake, draw as drawSnake, snakeSpeed} from './snake.js'

const gameBoard = document.getElementById('game-board')
let lastRenderTime = 0;

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snakeSpeed) {
        return
    }
    lastRenderTime = currentTime;

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
}