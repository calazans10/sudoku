'use strict';

function arrayIntersection(arr1, arr2) {
  return arr1
    .filter(value => arr2.indexOf(value) === -1)
    .concat(arr2.filter(value => arr1.indexOf(value) === -1));
}

function permutation(i, j) {
  let permutation = [];

  for (var k = 0; k <= i; k++) {
    for (var l = 0; l <= j; l++) {
      permutation.push([k, l]);
    }
  }

  return permutation;
}

class InvalidBoardError extends Error {
  constructor(message) {
    super();
    this.name = 'InvalidBoardError';
    this.message = message;
    this.stack = new Error().stack; // Optional
  }
}

class Position {
  constructor(x, y, board, region) {
    this.x = x;
    this.y = y;
    this.board = board;
    this.region = region;
  }

  related(x, y) {
    return this.relatedByLine(x, y).concat(this.relatedByColumn(x, y), this.relatedBySquare(x, y));
  }

  relatedByLine(x, y) {
    return this.board.lines()[x];
  }

  relatedByColumn(x, y) {
    return this.board.columns()[y];
  }

  relatedBySquare(x, y) {
    let sqrt = this.board.squareRoot();
    let pivot = this.relatedPivot(x, y);
    let index = pivot[1] / sqrt + pivot[0];
    return this.squares()[index];
  }

  relatedPivot(x, y) {
    let sqrt = this.board.squareRoot();
    return [x - (x % sqrt), y - (y % sqrt)];
  }

  get value() {
    return this.board[position.x][position.y];
  }

  // verifica se é um número dentro do range do board
  isvalid() {}

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
}

class Region {
  constructor(positions, board) {
    this.positions = positions;
    this.board = board;
  }

  // loop nas posições e chama invalid das posições em cada uma delas
  // se não tem nenhuma posição repetida nele
  isValid() {}
}

class Board {
  constructor(board = []) {
    this.board = board;

    if (this.board.length && !this.isValidBoard()) {
      throw new InvalidBoardError('Board is invalid.');
    }
  }

  // loop nas regiões e chama invalid das regiões em cada uma delas
  isValid() {}

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
    // verificar se não é válido, retorna falso quando isso acontecer
    for (let position of this.positions()) {
      if (this.getValueByPosition(position) === 0) {
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

  clone() {
    return new Board(JSON.parse(JSON.stringify(this.board)));
  }

  get positions() {
    return this
      .permutation(this.board.length - 1, this.board.length - 1)
      .map(arr => new Position(arr[0], arr[1]));
  }

  get lines() {
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

  get columns() {
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

  get squares() {
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

  get regions() {
    return this.lines().concat(this.columns(), this.squares());
  }

  get pivots() {
    let pivots = [];
    let sqrt = this.squareRoot();

    for (let i = 0; i < this.board.length; i += sqrt) {
      for (let j = 0; j < this.board.length; j += sqrt) {
        pivots.push([i, j]);
      }
    }

    return pivots;
  }

  get numbers() {
    return [...Array(this.board.length + 1).keys()];
  }

  get squareRoot() {
    return Math.sqrt(this.board.length);
  }
}

export default Board;
