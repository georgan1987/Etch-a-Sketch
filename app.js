let color = "black";
let click = true;

//Populates the Grid
function populateBoard(size){
 let board = document.querySelector(".board");
 board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
 board.style.gridTemplateRows = `repeat(${size}, 1fr)`

 let amount = size*size
 for (i=0; i < amount; i++){
     let square = document.createElement('div');
     square.classList.add('div-squares')
     square.addEventListener('mouseover', colorSquare)
     square.style.backgroundColor = "white";
     board.insertAdjacentElement('beforeend', square);
  }
}

populateBoard(16);

//New grid 
let newGridButton = document.querySelector("#new-grid");
newGridButton.addEventListener('click', function() {
    changeSize(newSize.value);
})

function changeSize(input){
        let squares = document.querySelectorAll("div .div-squares");
        squares.forEach((div) => div.remove());
        populateBoard(input);
}

//Function for RGB colors
function colorSquare() {
    if (click) {
      if(color === 'random') {
          this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
      } else {    
      this.style.backgroundColor = color;
      }
 }
}

//Range bar & display
let newSize = document.querySelector("#new-size");
newSize.value = 16;
let displaySize = document.querySelector("#size-label");
displaySize.textContent = newSize.value;
newSize.addEventListener('mousemove', function() {
    displaySize.textContent = newSize.value
})



function changeColor(choice) {
    color = choice;
}

//Clears the board
function resetBoard(){
    let squares = document.querySelectorAll("div .div-squares");
        squares.forEach((div) => div.style.backgroundColor = "white");
}

//Coloring Mode
document.querySelector('.board').addEventListener("click", (e) => {
    if(e.target.className != "board"){
    click = !click
    if(click){
        document.querySelector(".mode-not-coloring").textContent = "";
        document.querySelector(".mode-coloring").textContent = "Coloring"
    } else {
        document.querySelector(".mode-not-coloring").textContent = "Not Coloring";
        document.querySelector(".mode-coloring").textContent = ""  
    }
  }
});

//Function:Random Color for Coloring mode
let colorText = document.querySelector(".mode-coloring");

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let colour = '#';
    for (let i=0; i <6; i++) {
        colour += letters[Math.floor(Math.random()*16)];
    }
    return colour;
}

function flashRandomColor(){
    colorText.style.color = getRandomColor();
}

setInterval(flashRandomColor,700);