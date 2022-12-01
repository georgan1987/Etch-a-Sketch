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
    if (input >=2 && input <=100){
        let squares = document.querySelectorAll("div .div-squares");
        squares.forEach((div) => div.remove());
        populateBoard(input)
    }
    else{
        console.log("Put a number between 2 and 100")
    }
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
    let board = document.querySelector(".board");
    let squares = document.querySelectorAll("div .div-squares");
        squares.forEach((div) => div.style.backgroundColor = "white");W
}

//Coloring Mode
document.querySelector('.board').addEventListener("click", (e) => {
    if(e.target.className != "board"){
    click = !click
    if(click){
        document.querySelector(".mode").textContent = "Mode: Coloring"
    } else {
        document.querySelector(".mode").textContent = "Mode: Not Coloring"
    }
  }
});