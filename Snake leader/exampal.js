function functionBox(columnBox,rowBox) {
    let column = columnBox;
    let row = rowBox;
    for (let b = column; b < row; b++) {
        // console.log("hello");
        let str = document.createElement('div');
        str.classList.add('box');
        if (b + 1 == 1) {
            str.classList.add('active')
        }
        if (b % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = b + 1
        str.setAttribute('data-value', b + 1)
        str.classList.add('box');
        main.appendChild(str);
        // str.classList.add(`${leadder[b + 1] ? ladderImg : ''}`)
        // str.classList.add(`${snake[b + 1] ? snakeImg : ''}`)
    }
    return columnBox, rowBox;
}
function riverseBox(columnBox,rowBox) {
    let column = columnBox;
    let row = rowBox;
    for (let i = column; i > row; i--) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i
        str.setAttribute('data-value', i)
        str.classList.add('box');
        main.appendChild(str);
        // str.classList.add(`${leadder[i + 1] ? ladderImg : ''}`)
        // str.classList.add(`${snake[i + 1] ? snakeImg : ''}`)
    }
    return columnBox, rowBox;
}
riverseBox(100,90);
functionBox(80,90);
riverseBox(80,70);
functionBox(60,70);
riverseBox(60,50);
functionBox(40,50);
riverseBox(40,30);
functionBox(20,30);
riverseBox(20,10);
functionBox(0,10);


/*function createBox() {
    // debugger
    for (let i = 0; i < 10; i++)
    {
        let str = document.createElement('div');
        str.classList.add('box');
        if (i + 1 == 1) {
            str.classList.add('active')
        }
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i + 1
        str.setAttribute('data-value', i + 1)
        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)

    }
    for (let i = 20; i > 10; i--) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i
        str.setAttribute('data-value', i)
        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 20; i < 30; i++) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i + 1
        str.setAttribute('data-value', i + 1)
        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 40; i > 30; i--) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i
        str.setAttribute('data-value', i)

        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 40; i < 50; i++) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i + 1
        str.setAttribute('data-value', i + 1)

        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 60; i > 50; i--) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i
        str.setAttribute('data-value', i)

        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 60; i < 70; i++) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i + 1
        str.setAttribute('data-value', i + 1)

        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 80; i > 70; i--) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i;
        str.setAttribute('data-value', i)
        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 80; i < 90; i++) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i + 1
        str.setAttribute('data-value', i + 1)

        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }
    for (let i = 100; i > 90; i--) {
        let str = document.createElement('div');
        if (i % 2 == 0) {
            str.style.backgroundColor = 'red';
        } else {
            str.style.backgroundColor = 'gray';
        }
        str.innerHTML = i;
        str.setAttribute('data-value', i)
        str.classList.add('box');
        main.appendChild(str);
        str.classList.add(`${leadder[i + 1] ? ladderImg : 'as'}`)
        str.classList.add(`${snake[i + 1] ? snakeImg : 'as'}`)
    }

}
createBox();*/

