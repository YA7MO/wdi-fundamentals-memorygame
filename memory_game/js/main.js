console.log("Up and running!");

/*
created in the previous project
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; 
console.log("User flipped " + cardOne); // queen
console.log("User flipped " + cardThree); //king

*/
// object-array
var reset_board = document.getElementById('game-board-reset-button');
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},

{
rank: "queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png",
},


{
rank: "king",
suit: "hearts",
cardImage:"images/king-of-hearts.png"
},	

{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
]; 
var cardsInPlay = [];

var checkForMatch = function()
{

	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
		console.log("You found a match!");
		alert("You found a match!");

	} else {
		console.log("Sorry, try again.");
		alert("Sorry, try again");
	}

	reset_board.innerHTML = '<button id="reset_board">Start Over</button>';

}

function resetBoardButton() {
	location.reload();
}

var flipCard = function()
{
	//console.log(cardsInPlay); testing 
	var cardId = this.getAttribute('data-id');
	console.log("user flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	var newImage = cards[cardId].cardImage;
	this.setAttribute('src',newImage);

	if(cardsInPlay.length === 2)
	{
		checkForMatch();

	}
}

function createBoard() {
	
	for(var i =0; i < cards.length; i++){
		 var cardElement = document.createElement('img');
		 cardElement.setAttribute('src', "images/back.png");
		 cardElement.setAttribute('class', "deckImage");
		 cardElement.setAttribute('data-id',i);
		 cardElement.addEventListener('click',flipCard);
		 var game_board = document.getElementById('game-board');
		 game_board.appendChild(cardElement);

	}
}

createBoard();

reset_board.addEventListener('click',resetBoardButton);	
		
