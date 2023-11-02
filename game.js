const num1div = document.querySelector('#number1')
const num2div = document.querySelector('#number2');
const num3div = document.querySelector('#number3');
const timerdiv = document.querySelector('#timer')
let num1, num2, num3, operator, timerInterval;
const scoredata_game = {score: 0}
let timelimit = 20;
function displaytimer(){
    timerdiv.textContent = timelimit;
}

function starTimer(){
    clearInterval(timerInterval)
    displaytimer()
    timerInterval = setInterval(() => {
        timelimit--;
        displaytimer();
        if (timelimit <= 0) location.href = './gameover.html';
    }, 1000)
}
starTimer()
function random_two(){
    num1div.textContent = Math.ceil(Math.random() * 100);
    num2div.textContent = Math.ceil(Math.random() * 100);
    random_num3()
}

function updatescore(){
        location.href = './gameover.html';
        const scoredata = scoredata_game
        const scoredata_string = JSON.stringify(scoredata)
        localStorage.setItem('scoreData', scoredata_string);
}
random_two()

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const multiply = document.querySelector('#mul')
const divide = document.querySelector('#divide')
const mod = document.querySelector('#modulus')

function random_num3(){
    num1 = parseInt(document.getElementById('number1').innerText)
    num2 = parseInt(document.getElementById('number2').innerText)

    let randomChoice = Math.ceil(Math.random() * 5)
    let num3;
    if(randomChoice == 1) {
        operator = '+'
        num3 = num1 + num2;
    } 
    else if(randomChoice == 2) {
        operator = '-'
        num3 = Math.abs(num1 - num2)
    }
    else if(randomChoice == 3) {
        operator = '*'
        num3 = num1 * num2
    }
    else if(randomChoice == 4) {
        operator = '/'
        if (num1 === 0 || num2 === 0){
            random_num3()
            return
        }
        else num3 = num1 > num2 ? Math.floor(num1 / num2) : Math.floor(num2 / num1)
    }
    else if(randomChoice == 5) {
        operator = '%'
        if (num1 === 0 || num2 === 0){
            random_num3()
            return
        }
        num3 = num1 > num2 ? num1 % num2 : num2 % num1
    }

    num3div.textContent = num3;
}

plus.onclick = () => {
    if (operator === '+'){
        scoredata_game.score += 1;;
        random_two()
        timelimit = 20;
    }
    else updatescore()
    
}

minus.onclick = () => {
    if (operator === '-'){
        scoredata_game.score += 1;
        random_two()
        timelimit = 20;
    }
    else updatescore()
}

multiply.onclick = () => {
    if (operator === '*'){
        scoredata_game.score += 1;
        random_two()
        timelimit = 20;
    }
    else updatescore()
}

divide.onclick = () => {
    if (operator === '/') {
        random_two()
        scoredata_game.score += 1;
        timelimit = 20;
    }
    else updatescore()
}

mod.onclick = () => {
    if (operator === '%') {
        random_two()
        scoredata_game.score += 1;
        timelimit = 20;
    }
    else updatescore()
}