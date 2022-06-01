let randomNumber1 = Math.floor(Math.random() * 6 + 1);

let randomDiceImage1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomDiceImage1;

let firstDice = document.querySelectorAll("img")[0];

firstDice.setAttribute("src", randomImageSource1);

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage2;

let secondDice = document.querySelectorAll("img")[1];
secondDice.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 1 has won!";
} else if (randomNumber1 < randomNumber2) {
	document.querySelector("h1").innerHTML = "Player 2 has won!";
} else {
	document.querySelector("h1").innerHTML = "It's a draw!";
}
