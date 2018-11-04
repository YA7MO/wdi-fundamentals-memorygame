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

var cards = ["queen" ,"queen", "king", "king"]; // array holds the type of cards.
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
console.log("user flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

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

	
		
