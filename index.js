// Dice 1

var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6) + 1;
randomNumber1 = Math.floor(randomNumber1);
console.log(randomNumber1); 

 
var randomImageSource1 = "/images/dice" + randomNumber1 + ".png";
var Dice1=document.querySelectorAll("img")[0];
Dice1.setAttribute("src",randomImageSource1);

// Dice 2

var randomNumber2 = Math.random();
randomNumber2 = (randomNumber2 * 6) + 1;
randomNumber2 = Math.floor(randomNumber2);
console.log(randomNumber2);

var randomImageSource2 = "/images/dice" + randomNumber2 + ".png";
var Dice2=document.querySelectorAll("img")[0];
Dice2.setAttribute("src",randomImageSource2);

//Comparision
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "It's a Draw😜"
}else{
    document.querySelector("h1").innerHTML = "Player 2 Won";
}
