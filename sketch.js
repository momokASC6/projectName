var canvasWidth = 600;
var canvasHeight = 600;
var numRows = 10;
var numCols = 10;
var boxWidth = canvasWidth/numCols;
var boxHeight = canvasHeight/numRows;
var grid = [];
var ships = [];

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid();
    for(let i = 0; i < 3; i++) {
        ships.push(new Battleship(i*boxWidth, 0));
    }

    fill('red');
    for(let i = 0; i < ships.length; i++) {
        rect(ships[i].x, ships[i].y, boxWidth, boxHeight);
    }
}

function draw() {

}

function mouseClicked() {

}

function drawGrid() {
    for(let i = 0; i < numRows; i++) {
        let col = [];
        for(let j = 0; j < numCols; j++) {
            col.push(j*boxWidth);
        }
        grid.push(col);
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            rect(grid[i][j], i * boxHeight, boxWidth, boxHeight);
        }
    }
    //console.log(grid);
}