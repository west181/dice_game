



function myFunction() {
 document.getElementById("demo" ).innerHTML = "play 1 win";


let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    
let randomDiceImage = "dice" + randomNumber1 + ".png";


let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute( "src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

   //IF PLAYER 1 WINS

   if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "play 1 win"
   }
    else if (randomNumber2 > randomNumber1){
       document.querySelector('h1').innerHTML = "play 2 win"
   }

   else{
    document.querySelector("h1").innerHTML = "draw"
   }

}



