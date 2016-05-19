'use strict';

import Position from './position';
import Region from './region';
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

  isValid() {
    for (let region of this.regions) {
      if (!region.isValid()) {
        return false;
      }
    }
    return true;
  }

  isCompleted() {
    for (let region of this.regions) {
      if (!region.isCompleted()) {
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
      .map(arr => new Position(arr[0], arr[1], this));
  }

  get regions() {
    return this.lines.concat(this.columns, this.squares);
  }

  get lines() {
    let regions = [];

    for (let i = 0; i < this.board.length; i++) {
      let positions = [];
      for (let j = 0; j < this.board.length; j++) {
        positions.push(new Position(i, j, this));
      }
      regions.push(new Region(positions, this));
    }

    return regions;
  }

  get columns() {
    let regions = [];

    for (let i = 0; i < this.board.length; i++) {
      let positions = [];
      for (let j = 0; j < this.board.length; j++) {
        positions.push(new Position(j, i, this));
      }
      regions.push(new Region(positions, this));
    }

    return regions;
  }

  get squares() {
    let regions = [];

    for (let i = 0; i < this.board.length; i += this.squareRoot) {
      for (let j = 0; j < this.board.length; j += this.squareRoot) {
        let positions = [];
        for (let k = 0; k < this.squareRoot; k++) {
          for (let l = 0; l < this.squareRoot; l++) {
            positions.push(new Position(i + k, j + l, this));
          }
        }
        regions.push(new Region(positions, this));
      }
    }

    return regions;
  }

  get numbers() {
    return [...Array(this.board.length + 1).keys()];
  }

  get squareRoot() {
    return Math.sqrt(this.board.length);
  }
}

export default Board;
