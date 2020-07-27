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
    let board = []
    for (var i = 0; i < this.height; i++) {
      let row = []
      for (var j = 0; j < this.width; j++) {
        let col = 0
        row.push(col)
      }
      board.push(row)
    }
  }

  indexFor(row,col){
    // return undefined if we're out of bound
    if (row < 0 || row >= this.height || col < 0 ||col >= this.width) {
      return;
    }
    return row * this.width + col;
  }
  
  getCell (row,col){
    // create cellExist function and then do if this.cellExist() { code rest in here}
    console.log('get cell', row, col)
    if (value = 1){
      return value =  1;
    } else if (value = 0) {
      return value = 0;
    }
    return value; 
  }

  setCell (value, row, col){
     let board = this.board
     board[row][col] = value
     console.log(board, row, col)
  }

  toggleCell(row, col) {
  // toggles cell from 0 to 1 or from 1 to 0
    let board = this.board
    board[row][col] = !board[row][col]
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let board = this.board
    let count = 0;
    if (row-1 >= 0) {
        if (board[row-1][col] == 1) count++;  
    }
    if (row-1 >= 0 && col-1 >= 0) {
        if (board[row-1][col-1] == 1) count++;
    }
    if (row-1 >= 0 && col+1 < this.width) {
        if (board[row-1][col+1] == 1) count++;
    }
    if (col-1 >= 0) {
        if (board[row][col-1] == 1) count++;
    }
    if (col+1 < this.width) {
        if (board[row][col+1] == 1) count++;
    }
    if (row+1 < this.height) {
        if (boad[row+1][col] == 1) count++;
    }
    if (row+1 < this.height && col-1 >= 0) {
        if (grid[row+1][col-1] == 1) count++;
    }
    if (row+1 < this.height && col+1 < this.width) {
        if (board[row+1][col+1] == 1) count++;
    }
    return count;
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
    let board = this.board
    for (var i = 0; i < this.height; i++) {
      for (var j = 0; j < this.width; j++) {
        
        let state = board[i][j]

        if (i == 0 || i == col - 1 || j == 0 || j == row -1) {
          newBoard[i][j] = state
        } else {
          
          let neighbors = livingNeighbors(i, j)
      
          if (state === 0 && neighbors === 3) {
            newBoard[i][j] = 1
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            newBoard[i][j] = 0
          } else {
            newBoard[i][j] = state
          }
        }
  
      }
    }
    this.board = newBoard;
  }
  
}
  
