var numSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected"); //removes bckgnd color from "hard" button when you click on "easy" button
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares); //need numSquares because the correct solution may be in the 3 squares that are hidden. 
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){ //the amount of colors is set to three (see generateRandomCOlors within this code block). So colors[i] will be 3, thuse cancelling out the bottom 3 squares
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        } //this needs an if else because it's telling the code to hide 3 squares if there are only 3 squares being called. if you take the if and else out, it is a blank screen because there are no stipulations. It is just saying "none".
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected"); //removes bckgnd color from "easy" button when you click on "hard" button
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"; //this is used instead of 
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
squares[i].style.backgroundColor = colors[i];

//add click listeners to squares
squares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
    } else {
        this.style.backgroundColor = "#232323"; //sets incorrect pick to color of background so it blends in
        messageDisplay.textContent = "Try Again"
    }
});
}

function changeColors(color){
    //loop through all squares 
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
//make an array
var arr = [];
//add num random colors to array
for(var i = 0; i < num; i++){
    //getRandomColor and push into arr
    arr.push(randomColor())
    }
//return that array at very end
return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256) //picks a whole # anywhere from 0-255
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 -255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}