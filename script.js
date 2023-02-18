console.log("Welcome to Tic Tac Toe");

let music = new Audio("win.mp3");
let turnA = new Audio("tingN.mp3");
let gameoverA = new Audio("gameOver.mp3");
let turn = "X";
let isGameOver = false;
const checkDraw = false;
let count = 0;


//Function to change the turn
const changeTurn = () => {

    return turn === "X" ? "O" : "X"
}

//Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
            music.play();
           
            isGameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.padding = "20px 10px";
        }
        

    })
    // if (count === 9 && isGameOver === false) {
    //     document.querySelector('.info').innerText = " Its a draw!";
    //     // alert("Its a Draw!")
    //     console.log(document.querySelector('.info').innerText);
    // }
}



//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            count++;
            console.log(count);
            turnA.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                    
            }
            if (count === 9 && isGameOver === false) {
                document.querySelector('.info').innerText = " Its a Draw!";
                document.querySelector('.info').style.color = "#ac4b00";
                
                gameoverA.play();
                // console.log(document.querySelector('.info').innerText);
            }
            // else{
            //     document.getElementsByClassName("info")[0].innerText = "Its a Draw!";
            // }
           
        }
        
    })
})

// Add onclick Listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false
    count = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.info').style.color = "black";

})

