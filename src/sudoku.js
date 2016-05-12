'use strict';

class InvalidBoardError extends Error {
  constructor(message) {
    super();
    this.name = 'InvalidBoardError';
    this.message = message;
    this.stack = new Error().stack; // Optional
  }
}

class Position {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.board = board;
  }
}

class Board {
  getValueByPosition(position) {
    return this.board[position.x][position.y];
  }

  positions() {
    return this
      .permutation(this.board.length - 1, this.board.length - 1)
      .map(arr => new Position(arr[0], arr[1]));
  }

  constructor(board = []) {
    this.board = board;

    if (this.board.length && !this.isValidBoard()) {
      throw new InvalidBoardError('Board is invalid.');
    }
  }

  resolve() {
    return this.getSolutions()[0];
  }

  getSolutions(solutions = []) {
    if (this.isCompleted()) {
      solutions.push(this.board);
      return;
    }

    let position = this.nextMissing();
    let availableNumbers = this.availableNumbers(position[0], position[1]);

    if (availableNumbers.length == 0) {
      return;
    }

    for (let i = 0; i < availableNumbers.length; i++) {
      let sudokuClone = this.clone();
      sudokuClone.board[position[0]][position[1]] = availableNumbers[i];
      sudokuClone.getSolutions(solutions);
    }

    return solutions;
  }

  isCompleted() {
    for (let position of this.positions()) {
      if (this.getValueByPosition(position) === 0) {
        return false;
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

  nextMissing() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board.length; j++) {
        if (this.board[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;
  }

  availableNumbers(x, y) {
    let numbers = this.numbers().slice(1);
    let relatedNumbers = [];

    this.related(x, y).forEach(position => {
      if (this.board[position[0]][position[1]] !== 0) {
        relatedNumbers.push(this.board[position[0]][position[1]]);
      }
    });

    return this.arrayIntersection(numbers, relatedNumbers);
  }

  lines() {
    let lines = [];

    for (let i = 0; i < this.board.length; i++) {
      let line = [];
      for (let j = 0; j < this.board.length; j++) {
        line.push([i, j]);
      }
      lines.push(line);
    }

    return lines;
  }

  columns() {
    let columns = [];

    for (let i = 0; i < this.board.length; i++) {
      let column = [];
      for (let j = 0; j < this.board.length; j++) {
        column.push([j, i]);
      }
      columns.push(column);
    }

    return columns;
  }

  squares() {
    let squares = [];
    let sqrt = this.squareRoot();

    for (let i = 0; i < this.board.length; i += sqrt) {
      for (let j = 0; j < this.board.length; j += sqrt) {
        let square = [];
        for (let k = 0; k < sqrt; k++) {
          for (let l = 0; l < sqrt; l++) {
            square.push([i + k, j + l]);
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

  related(x, y) {
    return this.relatedByLine(x, y).concat(this.relatedByColumn(x, y), this.relatedBySquare(x, y));
  }

  relatedByLine(x, y) {
    return this.lines()[x];
  }

  relatedByColumn(x, y) {
    return this.columns()[y];
  }

  relatedBySquare(x, y) {
    let sqrt = this.squareRoot();
    let pivot = this.relatedPivot(x, y);
    let index = pivot[1] / sqrt + pivot[0];
    return this.squares()[index];
  }

  relatedPivot(x, y) {
    let sqrt = this.squareRoot();
    return [x - (x % sqrt), y - (y % sqrt)];
  }

  pivots() {
    let pivots = [];
    let sqrt = this.squareRoot();

    for (let i = 0; i < this.board.length; i += sqrt) {
      for (let j = 0; j < this.board.length; j += sqrt) {
        pivots.push([i, j]);
      }
    }

    return pivots;
  }

  arrayIntersection(arr1, arr2) {
    return arr1
      .filter(value => arr2.indexOf(value) === -1)
      .concat(arr2.filter(value => arr1.indexOf(value) === -1));
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

  numbers() {
    return [...Array(this.board.length + 1).keys()];
  }

  squareRoot() {
    return Math.sqrt(this.board.length);
  }

  clone() {
    return new Board(JSON.parse(JSON.stringify(this.board)));
  }

  isValidBoard() {
    let numbers = this.numbers();
    let positions = this.permutation(this.board.length - 1 , this.board.length - 1);

    for (let position of positions) {
      if (numbers.indexOf(this.board[position[0]][position[1]]) === -1) {
        return false;
      }
    }

    return true;
  }

  isValidRegion(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (this.board[array[i][0]][array[i][1]] === this.board[array[j][0]][array[j][1]]) {
          return false;
        }
      }
    }
    return true;
  }
}

export default Board;
