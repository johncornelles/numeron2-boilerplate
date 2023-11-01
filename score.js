// Iteration 8: Making scoreboard functional
const scorediv = document.querySelector('#score-board')
const scoredata_string = localStorage.getItem('scoreData')
const actual_score = JSON.parse(scoredata_string);

scorediv.textContent = actual_score.score

const playagain = document.querySelector('.play')
playagain.onclick = () => {
    location.href = './game.html'
} 