var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var player1 = document.querySelector("#p1")
var player2 = document.querySelector("#p2")
var resetButton = document.querySelector("#reset")
var inputNum = document.querySelector("input");
var paragraph = document.querySelector("p");
var changingVal = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;


player1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
});

player2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});
function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}


resetButton.addEventListener("click", function () {
    reset();
});


inputNum.addEventListener("change", function () {
    changingVal.textContent = inputNum.value;
    winningScore = Number(inputNum.value);
    reset();
})