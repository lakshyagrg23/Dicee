var randomNumber1 = Math.random();
randomNumber1 *= 6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1++;

var newImageSrc1 = "./images/dice" + randomNumber1 + ".png"; 
document.querySelector(".img1").setAttribute("src", newImageSrc1);

var randomNumber2 = Math.random();
randomNumber2 *= 6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2++;

var newImageSrc2 = "./images/dice" + randomNumber2 + ".png"; 
document.querySelector(".img2").setAttribute("src", newImageSrc2);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}
