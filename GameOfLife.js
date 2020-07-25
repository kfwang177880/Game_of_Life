class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */
 
  makeBoard() {
    // TODO: Create and return an 2D Array
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
    let arr = new Array(this.height)
    for (var i = 0; i < this.height; i++) {
      arr[i] = new Array(this.width)
    }
    return arr
  }

  let grid;
  let col ;
  let row ;
  let resolution = 20;

  function setup (col, row) {
    createCanvas(600,400)
    col = this.width / resolution
    row = this.height / resolution
    grid = makeBoard()
    for (var i = 0; i < col; i++) {
      for (var i = 0; i < row; i++) {
        grid[i][j] = floor(random(2))
      }
    }
  }

  function draw(){
    background(0);
  
    for (var i = 0; i < col; i++) {
      for (var i = 0; i < row; i++) {
        fill(255);
        stroke(255);
        rect(x,y,resolution-1,resolution-1)
      }
    }
    let next = makeBoard (col,row)
    for (var i = 0; i < col; i++) {
      for (var i = 0; i < row; i++) {
        let state = grid[i][j]

        let neighbors = countNeighbors(gird, i, j)
      
        if (state == 0 && neighbors === 3) {
          next[i][j] = 1
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0
        } else {
        next[i][j] = state
        }
      }
    //  sum += grid[i-1][j-1]
    //  sum += grid[i][j-1]
    //  sum += grid[i+1][j-1]
    //  sum += grid[i-1][j+1]
    //  sum += grid[i][j+1]
    //  sum += grid[i+1][j+1]
    //  sum += grid[i+][j]
    //  sum += grid[i-1][j]
    }
// count live neighbor

  
  grid = next

  }

  function countNeighbors(grid, x, y){
    let sum = 0
    for (var i = -1; i < 2; i++) {
      for (var i = -1; i < 2; i++) {
        let col = (x + i+ col) % col
        let row = (y + j + row) % row
        sum += grid[row][col]
      }
    }
    sum -= grid[x][y]
    return sum
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(grid, row, col) {
    // TODO: Return the count of living neighbors.
    let count = 0
    for (var i = row-1; i <= row+1; i++) {
      for (var j = col-1; j <= col+1; j++) {
        if (i >= 0 && i < this.width && j >= 0 && j < this.height) {
          count += grid[i][j] 
        }
      }
    }
    count -= grid[i][j]
    return count
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    var randomHoleIndex = Math.floor(Math.random() * this.width * this.height)
    for (var i = row-1; i <= row+1; i++) {
      for (var j = col-1; j <= col+1; j++) {
      }
    }
    this.board = newBoard;
  }
}
