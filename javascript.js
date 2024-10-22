const squaresContainer = document.querySelector(".squares-container");

function createSquares(numOfSquares)
{
    //Square dimensions (currently no gap)
    let gapSapce = 0 * (numOfSquares - 1);
    let squareLength = Math.floor((740 - gapSapce) / numOfSquares);
    for (let i = 0; i < numOfSquares * numOfSquares; i++)
    {
        //Create squares
        let square = document.createElement("div");
        square.classList.add("squares");
        squaresContainer.appendChild(square);
        square.style.opacity = 1.0;
        //Size squares
        square.style.height = squareLength.toString() + "px";
        square.style.width = squareLength.toString() + "px";
        //Add hovering effect
        square.addEventListener("mouseover", () => {
            // square.style.backgroundColor = "rgb(171, 217, 230)";
            square.style.opacity -= 0.2;
        })
    }
}

//start with 16x16 grid
createSquares(16);



const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
    //Nodelist for all squares
    const squares = document.querySelectorAll(".squares");
    for (let i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = "white";
        squares[i].style.opacity = 1;
    }
})

const changeSquaresButton = document.querySelector(".change-grid-size");

changeSquaresButton.addEventListener("click", () => {
    //Nodelist for all squares
    const squares = document.querySelectorAll(".squares");
    let numSquares = -1;
    while (numSquares < 0 || numSquares > 100)
    {
        numSquares = prompt("How many squares per side? (Max 100)"); //Need to remove ability to submit string
    }
    //Remove existing squares before adding new
    for (let i = 0; i < squares.length; i++)
    {
        squaresContainer.removeChild(squares[i]);
    }
    createSquares(numSquares);
})

//remove original grid
// size new grid appropriately basde on num of squares