"use strict"

let gameNumber = 0;
function $$(query) {
    return document.querySelector(query);
}

let generateNumber = function () {
    gameNumber = Math.random() * 20;
    gameNumber = (gameNumber - gameNumber % 1) + 1;
}
generateNumber()
console.log(`Answer is ${gameNumber}!`)

$$('.check-btn').addEventListener('click', function () {
    let inputNumber = $$(".input-number").value;
    if (inputNumber > 20 || inputNumber < 1 || inputNumber % 1 != 0) {
        $$(".report").textContent = "Invalid Number";
    }
    else if (inputNumber > gameNumber) {
        $$(".report").textContent = "too high";
        $$('.score-number').textContent--;
    }
    else if (inputNumber < gameNumber) {
        $$(".report").textContent = "too low";
        $$('.score-number').textContent--;
    }
    else if (inputNumber = gameNumber) {
        $$("body").style.backgroundColor = "rgb(0,255,100)";
        $$(".answer").textContent = gameNumber;
        $$(".report").textContent = "You are Winner!!";
        $$(".check-btn").classList.add("hidden");
        if ($$(".score-number").textContent > $$(".highscore-number").textContent) {
            $$(".highscore-number").textContent = ($$(".score-number").textContent)
        }
    }
    if ($$('.score-number').textContent == 0) {
        $$(".report").textContent = "Game Over!";
        $$(".check-btn").classList.add("hidden");
        $$("body").style.backgroundColor = "rgb(255,0,0)";
        $$(".answer").textContent = gameNumber;
    }
});

$$(".btn-again").addEventListener("click", function () {
    generateNumber()
    console.log(`Answer is ${gameNumber}!`)
    $$(".score-number").textContent = 20;
    $$("body").style.backgroundColor = "rgb(41, 41, 41)"
    $$(".check-btn").classList.remove("hidden");
    $$(".input-number").value = '';
    $$(".answer").textContent = "?";



});

