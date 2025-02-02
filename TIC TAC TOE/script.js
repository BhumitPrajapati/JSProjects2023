// var player1 = prompt("Enter Player1: ");
// var player2 = prompt("Enter Player2: ");

// var userChoice = prompt("Choose between X and O");
// if((userChoice == 'x' || userChoice == 'X') && (userChoice == 'o' || userChoice == 'O'))
// {

//     if((player1 || player2) != null){
//         document.getElementById("ins").innerHTML = "Game starts by just Tap onbox <br><br> First Player name is " + user + ", choose " + userChoice + "<br>And<br>SecondPlayer as "
//     }
// }
// else {
//     alert("Pls Select valid things")
// }

var firstPlayer = prompt('First Player Enter your name : ');
var SecondPlayer = prompt('Second Player Enter your name : ')
let flag = 1;

document.getElementById("first").innerText = firstPlayer;
document.getElementById("second").innerText = SecondPlayer;

if (firstPlayer != null && SecondPlayer != null) {
    var choose = prompt(`${firstPlayer} what you choose X or 0`)
    if ((choose == 'x' || choose == 'X') || (choose == 'o' || choose == 'O')) {
        if (choose == 'x' || choose == 'X') {
            document.getElementById("player1").innerText = 'X';
            document.getElementById("player2").innerText = 'O';
            flag = 1;
        }

        if (choose == "O" || choose == 'o' || choose == 0) {
            document.getElementById("player1").innerText = 'O';
            document.getElementById("player2").innerText = 'X';
            flag = 0;
        }
    }
}

// put Values
function myfunc_1() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "O";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

function myfunc_2() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "O";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}

function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "O";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}


function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "O";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}


function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "O";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}


function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "O";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}


function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "O";
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}


function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "O";
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}


function myfunc_9() {
    if (flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "O";
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}

//reset button
function reset_btn() {
    window.location.reload();   //refresh the web page
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById('b6').value = '';
    document.getElementById('b7').value = '';
    document.getElementById('b8').value = '';
    document.getElementById('b9').value = '';

}
function myFunction() {


    var b1, b2, b3, b4, b5, b6, b7, b8, b9;

    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value;
    b8 = document.getElementById('b8').value;
    b9 = document.getElementById('b9').value;



    if ((b1 == 'X' || b1 == "x") && (b2 == 'X' || b2 == "x") && (b3 == 'X' || b3 == "x")) {
        // print "X is won"
        
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
       
    }
    else if ((b4 == 'X' || b4 == "x") && (b5 == 'X' || b5 == "x") && (b6 == 'X' || b6 == "x")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
        
    }
    else if ((b7 == 'X' || b7 == "x") && (b8 == 'X' || b8 == "x") && (b9 == 'X' || b9 == "x")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
       
    }
    else if ((b1 == 'X' || b1 == "x") && (b4 == 'X' || b4 == "x") && (b7 == 'X' || b7 == "x")) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
        
    }
    else if ((b2 == 'X' || b2 == "x") && (b5 == 'X' || b5 == "x") && (b8 == 'X' || b8 == "x")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
        
    }
    else if ((b3 == 'X' || b3 == "x") && (b6 == 'X' || b6 == "x") && (b9 == 'X' || b9 == "x")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
        
    }
    else if ((b1 == 'X' || b1 == "x") && (b5 == 'X' || b5 == "x") && (b9 == 'X' || b9 == "x")) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
        
    }
    else if ((b3 == 'X' || b3 == "x") && (b5 == 'X' || b5 == "x") && (b7 == 'X' || b7 == "x")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'x' || choose =='X') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
    }



    //O 

    else if ((b1 == 'O' || b1 == "o") && (b2 == 'O' || b2 == "o") && (b3 == 'O' || b3 == "o")) {
        // print "O is won"

        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
    }
    else if ((b4 == 'O' || b4 == "o") && (b5 == 'O' || b5 == "o") && (b6 == 'O' || b6 == "o")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
    }
    else if ((b7 == 'O' || b7 == "o") && (b8 == 'O' || b8 == "o") && (b9 == 'O' || b9 == "o")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
    }
    else if ((b1 == 'O' || b1 == "o") && (b4 == 'O' || b4 == "o") && (b7 == 'O' || b7 == "o")) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
    }
    else if ((b2 == 'O' || b2 == "o") && (b5 == 'O' || b5 == "o") && (b8 == 'O' || b8 == "o")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
       
    }
    else if ((b3 == 'O' || b3 == "o") && (b6 == 'O' || b6 == "o") && (b9 == 'O' || b9 == "o")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }

    }
    else if ((b1 == 'O' || b1 == "o") && (b5 == 'O' || b5 == "o") && (b9 == 'O' || b9 == "o")) {

        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
    }
    else if ((b3 == 'O' || b3 == "o") && (b5 == 'O' || b5 == "o") && (b7 == 'O' || b7 == "o")) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        if (choose == 'o' || choose =='O') {
            document.getElementById('print').innerHTML = `Player  ${firstPlayer} is WIN the Match`;
        }else{
            document.getElementById('print').innerHTML = `Player ${SecondPlayer} is WIN the Match`;

        }
      
    }
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        document.getElementById('print').innerHTML = "Match Tie"
    }

    else {
        if (flag == 1) {

            if (choose == 'x' || choose =='X') {
                document.getElementById('print').innerHTML = `It's your Turn ${firstPlayer} `;
            }else{
                document.getElementById('print').innerHTML = `It's your Turn ${SecondPlayer} `;
    
            }
        }
        else {
            if (choose == 'o' || choose =='O') {
                document.getElementById('print').innerHTML = ` It's your Turn ${firstPlayer} `;
            }else{
                document.getElementById('print').innerHTML = ` It's your Turn ${SecondPlayer} `;
    
            }

        }
    }
}