var turn = "X";
var winner = false;
var wins = [ // all possible winning cases
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
function changeTurn() { //changing turn
    if (turn === "X") {
        turn = "O";
    }
    else {
        turn = "X";
    }
}
var boxes = document.querySelectorAll(".box");//getiing all boxes for applying a event listener
boxes.forEach(function (e) {
    e.addEventListener("click", function () {
        //reseting once winner is announced
        if (e.innerHTML === "") {// dealing if blank box is clicked
            if (winner === true) {
                reset();
            }
            //displaying x and o in game
            e.innerHTML = turn;
            document.getElementById("caution").innerHTML = ""; //removing caution if user has ckicked rigth box
            checkwin(); //checking for winner if present
            if (!winner) { // checking fordraw if one winner not got
                isdraw();
            }
            changeTurn(); //changing turn
            document.getElementById("turn").innerHTML = turn + "'s  Turn"; // displaying turn on screen

        } else { //  if already filled box is clicked
            document.getElementById("caution").innerHTML = "Only Click on blank box";
        }


    })
})
function checkwin() { // winner checking function
    wins.forEach(element => { // comparing each winnning case from wins array with our game box inputs
        if (boxes[element[0]].innerHTML === boxes[element[1]].innerHTML && boxes[element[1]].innerHTML === boxes[element[2]].innerHTML && boxes[element[0]].innerHTML != "") {
            document.getElementById("turn").style.display = "none"; // hiding turn dislplayer if winner is found
            document.getElementById("result").innerHTML = ` ${turn} wins`;// displaying the winner on the screen
            // making the box greeen so that player could see how winner won 
            boxes[element[0]].style.backgroundColor = "green";
            boxes[element[1]].style.backgroundColor = "green";
            boxes[element[2]].style.backgroundColor = "green";
            winner = true;

        }
    });
}
function isdraw() { // chechking for match draw
    var counter = 0;
    boxes.forEach(function (e) {
        if (e.innerHTML != "") {
            counter++;
        }
    }) // if all boxes are filled 
    if (counter == 9) {
        document.getElementById("turn").style.display = "none";// hidding turn displayer
        document.getElementById("result").innerHTML = "Match Draw!! click on Reset button to play agian";
    }
}
function reset() { // functionong of reset button
    turn = "X";
    winner = false;
    document.getElementById("turn").style.display = "inline"; // displaying the turn indicator again
    document.getElementById("result").innerHTML = ""; // resetting the winner displayer
    boxes.forEach(function (e) { // changing the green boxes back to original
        e.innerHTML = "";
        e.style.backgroundColor = "#1C1C1C";

    })
}
document.getElementById("reset").addEventListener("click", reset); // connnecting reset button with reset function
// changing color of heading blinking effect
setInterval(function() {
    document.getElementById("heading").style.color = "#FF9500";
} ,1000);
setInterval(function() {
    document.getElementById("heading").style.color = "white";
} , 1500);
