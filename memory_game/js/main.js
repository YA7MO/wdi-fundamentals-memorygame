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
} else {
console.log("Sorry, try again.");
}
}

var flipCard = function(cardId)
{
//console.log(cardsInPlay); testing 
console.log("user flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);

if(cardsInPlay.length === 2)
{
	
	if(cardsInPlay[0] === cardsInPlay[1])
	{
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again");
	}

	checkForMatch();

}
}
 flipCard(0);
 flipCard(2);

	
		
