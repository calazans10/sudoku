'use strict';

class Sudoku {
  constructor (grid) {
    this.grid = grid;
  }

  pivots() {
    let sqrt = Math.sqrt(this.grid.length);
    let pivots = [];

    for (let x = 0; x < this.grid.length; x += sqrt) {
      for (let y = 0; y < this.grid.length; y += sqrt) {
        pivots.push([x, y]);
      }
    }

    return pivots;
  }

  arrayIntersection(arr1, arr2) {
    return arr1
              .filter(x => arr2.indexOf(x) === -1)
              .concat(arr2.filter(x => arr1.indexOf(x) === -1));
  }

  permutation(i, j) {
    let permutation = [];

    for (var k = 0; k <= i; k++) {
      for (var l = 0; l <= j; l++) {
        permutation.push([k, l]);
      }
    }

    return permutation;
  }

  lines() {
    // let lines = [];
    // for (let x in this.grid) {
    //   lines.push(this.permutation(x, this.grid.length - 1));
    // }
    // return lines;

    let lines = [];
    for (var x = 0; x < this.grid.length; x++) {
      let line = [];
      for (var y = 0; y < this.grid.length; y++) {
        line.push([x, y]);
      }
      lines.push(line);
    }
    return lines;
  }

  columns() {
    // let columns = [];
    // for (let x in this.grid) {
    //   columns.push(this.permutation(this.grid.length - 1, x));
    // }
    // return columns;

    let columns = [];
    for (var x = 0; x < this.grid.length; x++) {
      let column = [];
      for (var y = 0; y < this.grid.length; y++) {
        column.push([y, x]);
      }
      columns.push(column);
    }
    return columns;
  }

  squares() {
    let squares = [];
    let sqrt = Math.sqrt(this.grid.length);

    for (let i = 0; i < this.grid.length; i += sqrt) {
      for (let j = 0; j < this.grid.length; j += sqrt) {
        let square = [];
        for (let x = 0; x < sqrt; x++) {
          for (let y = 0; y < sqrt; y++) {
            square.push([i + x, j + y]);
          }
        }
        squares.push(square);
      }
    }

    return squares;
  }

  regions() {
    return this.lines().concat(this.columns(), this.squares());
  }

  relatedPivot(x, y) {
    let sqrt = Math.sqrt(this.grid.length);
    return [x - (x % sqrt), y - (y % sqrt)];
  }

  relatedByLine(x, y) {
    return this.lines()[x];
  }

  relatedByColumn(x, y) {
    return this.columns()[y];
  }

  relatedBySquare(x, y) {
    let sqrt = Math.sqrt(this.grid.length);
    let pivot = this.relatedPivot(x, y);
    let index = pivot[1] / sqrt + pivot[0];
    return this.squares()[index];
  }

  related(x, y) {
    return this.relatedByLine(x, y).concat(this.relatedByColumn(x, y), this.relatedBySquare(x, y));
  }

  isCompleted() {
    for (let x in this.grid) {
      for (let y in this.grid) {
        if (this.grid[x][y] === 0) {
          return false;
        }
      }
    }
    return true;
  }

  isValid() {
    let regions = this.regions();
    for (let x in regions) {
      if (!this.isValidRegion(regions[x])) {
        return false;
      }
    }
    return true;
  }

  isValidRegion(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (this.grid[array[i][0]][array[i][1]] === this.grid[array[j][0]][array[j][1]]) {
          return false;
        }
      }
    }
    return true;
  }

  nextMissing() {
    for (var x = 0; x < this.grid.length; x++) {
      for (var y = 0; y < this.grid.length; y++) {
        if (this.grid[x][y] === 0) {
          return [x, y];
        }
      }
    }
    return null;
  }

  availableNumbers(x, y) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let relatedNumbers = [];

    this.related(x, y).forEach(position => {
      if (this.grid[position[0]][position[1]] !== 0) {
        relatedNumbers.push(this.grid[position[0]][position[1]]);
      }
    });

    return this.arrayIntersection(numbers, relatedNumbers);
  }

  stepBack(states) {
    console.log('tamanho state: ', states.length);

    if (states.length === 0) {
      throw(`impossible to solve: ${lastState.position}}`);
    }

    let lastState = states[states.length - 1];
    this.grid = lastState.grid;
    let availableNumbers = this.availableNumbers(lastState.position[0], lastState.position[1]);
    let availableNumberIndex = lastState.availableNumberIndex;

    if (availableNumbers[lastState.availableNumberIndex + 1]) {
      availableNumberIndex = lastState.availableNumberIndex + 1;
      return true;
    } else {
      console.log('remove...');
      states.pop();
      return this.stepBack(states);
    }
  }

  resolve() {
    let states = [];
    let globalIndex = 0;

    while (!this.isCompleted()) {
      let position = this.nextMissing();
      let availableNumbers = this.availableNumbers(position[0], position[1]);
      let availableNumberIndex = globalIndex;
      console.log('posições', position[0], position[1], availableNumbers);

      if (!position || availableNumbers.length === 0) {
        this.stepBack(states);
        let lastState = states[states.length - 1];
        globalIndex = lastState.availableNumberIndex;
        // console.log(position[0], position[1], '-', globalIndex);
      } else {
        globalIndex = 0;

        states.push(JSON.parse(JSON.stringify({
          grid: this.grid,
          position: position,
          availableNumberIndex: availableNumberIndex
        })));

        this.grid[position[0]][position[1]] = availableNumbers[availableNumberIndex];
      }
    }
    console.log(states);
    return this.grid;
  }

  // Retorna todas as possíveis soluções
  getSolutions() {}

  test(solutions = []) {
    if (this.isCompleted()) {
      console.log('Completed');
      solutions.push(this.grid);
      return;
    }

    let position = this.nextMissing();
    console.log('get position: ', position);

    let availableNumbers = this.availableNumbers(position[0], position[1]);
    console.log('get available numbers:', availableNumbers);

    console.log('check available numbers length:', availableNumbers.length);
    if (availableNumbers.length == 0) {
      console.log('Impossible');
      return;
    }

    console.log('Loop available numbers');
    for (var i = 0; i < availableNumbers.length; i++) {
      let sudokuClone = new Sudoku(this.clone(this.grid));
      console.log('Chosen available number:', availableNumbers[i]);
      sudokuClone.grid[position[0]][position[1]] = availableNumbers[i];

      console.log('Call clone.test');
      sudokuClone.test(solutions);
    }

    return solutions.length;
  }

  clone(object) {
    return JSON.parse(JSON.stringify(object));
  }
}

export default Sudoku;
