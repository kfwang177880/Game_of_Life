const width = 25;
const height = 20; // width and height dimensions of the board

/**
 * Create a Game of Life instance
 */

const gol = new GameOfLife(width, height);

/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = [];

// <table> element
const table = document.createElement('tbody');
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement('tr');
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement('td');
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById('board').append(table);

/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
  // TODO:
  //   1. For each <td> in the table:
  //     a. If its corresponding cell in gol instance is alive,
  //        give the <td> the `alive` CSS class.
  //     b. Otherwise, remove the `alive` class.
  //
  // To find all the <td>s in the table, you might query the DOM for them, or you
  // could choose to collect them when we create them in createTable.
  //
  // HINT:
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  //   https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
  let rows = Array.from(document.getElementsByTagName('tr'))
  rows.forEach(element => {
    let tdArray = Array.from(element.getElementsByTagName('td'))
    tdArray.forEach (td=>{
      let cell = td
      let row = td.dataset.row
      let col = td.dataset.col
      state =  gol.getCell(row, col)
      if (state === 1) {
        cell.classList.add('alive')
      } else {
        cell.classList.remove('alive')
      }
    } )
  } )
};

/**
 * Event Listeners
 */

document.getElementById('board').addEventListener('click', (event) => {
  // TODO: Toggle clicked cell (event.target) and paint
  if (event.target.matches('td')) {
    let cell = event.target
    let row = cell.dataset.row
    let col = cell.dataset.col
    console.log('board==>',row, col)
    let state = gol.getCell(row,col)
    if (state === 1) {
      gol.setCell(0,row,col)
    } else{
      gol.setCell(1,row,col)
    }
  }
  paint()
});

document.getElementById('step_btn').addEventListener('click', (event) => {
  // TODO: Do one gol tick and paint
  if (event.target.matches('#step_btn')) {
    console.log('Hello')
    gol.tick()
    paint()
  }
});

document.getElementById('play_btn').addEventListener('click', (event) => {
  // TODO: Start playing by calling `tick` and paint
  // repeatedly every fixed time interval.
  // HINT:
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
  let play = false
  if (event.target.matches('#play_btn') && !play) {
    play = true
    setInterval(() => {
      gol.tick()
      paint() 
    }, 500)
    
  }
  
});

function getRandom() {
  return Math.floor(Math.random() * Math.floor(2));
}

document.getElementById('random_btn').addEventListener('click', (event) => {
  // TODO: Randomize the board and paint
  if (event.target.matches('#random_btn')) {
    let rows = Array.from(document.getElementsByTagName('tr'))
    rows.forEach(element => {
      let tdArray = Array.from(element.getElementsByTagName('td'))
      tdArray.forEach(td => {
        let value = getRandom()
        let row = td.dataset.row
        let col = td.dataset.col
        console.log('random==>',row,col)
        gol.setCell(value, row, col)
      })
    })
  }
});

document.getElementById('clear_btn').addEventListener('click', (event) => {
  // TODO: Clear the board and paint
  if (event.target.matches('#clear_btn')) {
    let rows = Array.from(document.getElementsByTagName('tr'))
    rows.forEach(element => {
      let tdArray = Array.from(element.getElementsByTagName('td'))
      tdArray.forEach(td => {
        let row = td.dataset.row
        let col = td.dataset.col
        gol.setCell(0, row, col)
      } )
    } )
  }

});
