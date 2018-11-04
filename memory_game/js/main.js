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
var cardOne = cards[0]; // first card 
cardsInPlay.push(cardOne);

console.log("player flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("palyer flipped king");

//console.log(cardsInPlay); testing 

if(cardsInPlay.length === 2){
	
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again");
	}

}
	 
	
		
