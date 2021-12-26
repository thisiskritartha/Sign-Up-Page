//DICE 1

var randomNumber1 = Math.floor(Math.random()*6) + 1;  // produce the number 1-6

var randomImage1 = "dice" + randomNumber1 + ".png";   //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomImage1;     //images/randomImage

var image1 = document.querySelector(".img1");

image1.setAttribute("src", randomImageSource1);


//DICE 2

var randomNumber2 = Math.floor(Math.random()*6) + 1;  // produce the number 1-6

var randomImage2 = "dice" + randomNumber2 + ".png";   //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomImage2;     //images/randomImage

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);


//check for the win

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS.";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS.";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!";
}
