let main = document.getElementById('main');
let box = [100];
const n = 10;
let flag = true;
let firstPlyer = prompt('Enater First Player Name')
let secondPlyer = prompt('Enater Second Player Name')
document.getElementById('trun').innerText = `${firstPlyer} turn`
document.getElementsByClassName('player1')[0].innerText = firstPlyer;
document.getElementsByClassName('player2')[0].innerText = secondPlyer;
// document.getElementById('results').innerText = firstPlyer;
// document.getElementById('results').innerText = secondPlyer;
const leadder = {
    18: 65,
    28: 47,
    60: 61,
    69: 90,
    // 61: 98
};
const snake = {
    49: 12,
    73: 51,
    67: 25,
    96: 76,
    83: 19,
    79: 59,
};
const snakeImg = "snake";
const ladderImg = "lader"
function functionBox(columnBox, rowBox) {
    let column = columnBox;
    let row = rowBox;
    for (let b = column; b < row; b++) {
        let str = document.createElement('div');
        str.classList.add('box');
        main.appendChild(str);
        str.innerHTML = b + 1;
        str.setAttribute('data-value', b + 1)
        if (b + 1 == 1) {
            str.classList.add('active');
            str.classList.add('active2');
        }
        if (b % 2 == 0) {
            str.style.backgroundColor = '#4d88ff';
        } else {
            str.style.backgroundColor = 'white';
        }
        str.classList.add(`${leadder[b + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[b + 1] ? snakeImg : 'as'}`)
    }
    return columnBox, rowBox;
}
function riverseBox(columnBox, rowBox) {
    let column = columnBox;
    let row = rowBox;
    for (let i = column; i > row; i--) {
        let str = document.createElement('div');
        main.appendChild(str);
        str.classList.add('box');
        str.innerHTML = i
        str.setAttribute('data-value', i)
        if (i % 2 == 0) {
            str.style.backgroundColor = 'white';
        } else {
            str.style.backgroundColor = '#4d88ff';
        }
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    return columnBox, rowBox;
}
riverseBox(100, 90);
functionBox(80, 90);
riverseBox(80, 70);
functionBox(60, 70);
riverseBox(60, 50);
functionBox(40, 50);
riverseBox(40, 30);
functionBox(20, 30);
riverseBox(20, 10);
functionBox(0, 10);
function roll(value) {
    let dicevalue = document.getElementById(`dice`).innerHTML = Math.ceil(Math.random() * 6);
    document.getElementById(`dice2`).innerHTML = Math.ceil(Math.random() * 6);
    flag = value;
    if (flag == true) {
        document.getElementById("dice").disabled = true;
        document.getElementById("dice2").disabled = false;
        document.getElementById('trun').innerText = `${secondPlyer} turn`
    } else {
        document.getElementById("dice2").disabled = true;
        document.getElementById("dice").disabled = false;
        document.getElementById('trun').innerText = `${firstPlyer} turn`
    }
    changeCurrentPosition(dicevalue);
}
function changeCurrentPosition(dicevalue) {
    let index;
    if (flag == true) {
        index = document.querySelector('.active');
    } else {
        index = document.querySelector('.active2');
    }
    let activeValue = parseInt(index.outerText);
    let currentValue = dicevalue + activeValue;
    if (snake[currentValue]) {
        if (snake[currentValue] == ('.active')) {            
            alert(`${firstPlyer} oops looks like snake ....!`)
            changeActiveClass(snake[currentValue]);
        }else{
            alert(`${secondPlyer} oops looks like snake ....!`)
            changeActiveClass(snake[currentValue]);
        }
    } else if (leadder[currentValue]) {
        if (leadder[currentValue] == ('.active')) {            
            alert(`${firstPlyer} you have laders ...!`);
            changeActiveClass(leadder[currentValue]);
        }else{
            alert(`${secondPlyer} you have laders ...!`);
            changeActiveClass(leadder[currentValue]);
        }
    } else if (currentValue <= 100) {
        changeActiveClass(currentValue);
    }
    else if (currentValue <= 100) {
        alert('you have alredy win this game ...!')
    }
}
function changeActiveClass(currentValue) {
    if (flag == true) {
        const index = document.querySelector('.active');
        index.classList.remove('active');
        const block = document.querySelector(`[data-value = "${currentValue}"]`);
        block.classList.add('active');
        if (currentValue >= 100) {
            document.getElementById("results").innerText = `${firstPlyer} Win the Match.`;
        }
    }
    else {
        const index = document.querySelector('.active2');
        index.classList.remove('active2');
        const block = document.querySelector(`[data-value = "${currentValue}"]`);
        block.classList.add('active2');
        if (currentValue >= 100) {
            document.getElementById("results").innerText = `${secondPlyer} Win the Match.`;
        }
    }
}
