'use strict';

import Position from './position';
import permutation from './modules/permutation';

class Board {
  constructor(board = []) {
    this.board = board;

    // if (this.board.length && !this.isValidBoard()) {
    //   throw new InvalidBoardError('Board is invalid.');
    // }
  }

  getSolution() {
    return this.solutions()[0];
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
      sudokuClone.solutions(solutions);
    }

    return solutions;
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

  // loop nas regiões e chama invalid das regiões em cada uma delas
  isValid() {}

  isCompleted() {
    // verificar se não é válido, retorna falso quando isso acontecer
    for (let position of this.positions()) {
      if (this.getValueByPosition(position) === 0) {
        return false;
      }
    }
    return true;
  }

  clone() {
    return new Board(JSON.parse(JSON.stringify(this.board)));
  }

  get positions() {
    return permutation(this.board.length - 1, this.board.length - 1)
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

    for (let i = 0; i < this.board.length; i += this.squareRoot) {
      for (let j = 0; j < this.board.length; j += this.squareRoot) {
        let square = [];
        for (let k = 0; k < this.squareRoot; k++) {
          for (let l = 0; l < this.squareRoot; l++) {
            square.push([i + k, j + l]);
          }
        }
        squares.push(square);
      }
    }

    return squares;
  }

  get regions() {
    return this.lines.concat(this.columns, this.squares);
  }

  get pivots() {
    let pivots = [];

    for (let i = 0; i < this.board.length; i += this.squareRoot) {
      for (let j = 0; j < this.board.length; j += this.squareRoot) {
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
