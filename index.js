var randomNumber1 = Math.floor((Math.random()*6) + 1);

// switch (randomNumber1) {
//     case 1:
//         document.querySelector("img.img1").setAttribute("Src", "images/dice1.png");
//         break;
//     case 2:
//         document.querySelector("img.img1").setAttribute("Src", "images/dice2.png");
//         break;
//     case 3:
//         document.querySelector("img.img1").setAttribute("Src", "images/dice3.png");
//         break;
//     case 4:
//         document.querySelector("img.img1").setAttribute("Src", "images/dice4.png");
//         break;
//     case 5:
//         document.querySelector("img.img1").setAttribute("Src", "images/dice5.png");
//         break;
//     case 6:
//         document.querySelector("img.img1").setAttribute("Src", "images/dice6.png");
//         break;
// }

// another solutions
var imageSource = "images/dice" +  randomNumber1 + ".png";
console.log(randomNumber1);
document.querySelector("img.img1").setAttribute("Src", imageSource);


var randomNumber2 = Math.floor((Math.random()*6) + 1);

switch (randomNumber2) {
    case 1:
        document.querySelector("img.img2").setAttribute("Src", "images/dice1.png");
        break;
    case 2:
        document.querySelector("img.img2").setAttribute("Src", "images/dice2.png");
        break;
    case 3:
        document.querySelector("img.img2").setAttribute("Src", "images/dice3.png");
        break;
    case 4:
        document.querySelector("img.img2").setAttribute("Src", "images/dice4.png");
        break;
    case 5:
        document.querySelector("img.img2").setAttribute("Src", "images/dice5.png");
        break;
    case 6:
        document.querySelector("img.img2").setAttribute("Src", "images/dice6.png");
        break;
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerText = "Draw!";
}