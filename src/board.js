'use strict';

const _ = require('lodash');
const InvalidBoardError = require('./errors/invalidBoardError');
const permutation = require('./utils/permutation');
const Position = require('./position');
const Region = require('./region');

class Board {
  constructor(board = []) {
    this.board = board;

    if (this.board.length && !this.isQuadratic()) {
      throw new InvalidBoardError('Board is not quadratic.');
    }

    if (this.board.length && !this.isValid()) {
      throw new InvalidBoardError('Board is invalid.');
    }
  }

  static generate() {
    let grid = [
      _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]),
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let board = new Board(grid);

    let solution = board.getSolution()
      .map(line => line.map(position => Math.floor(Math.random() * 100) + 1 > 1 ? position : 0));

    return new Board(solution);
  }

  getSolution() {
    if (this.isCompleted()) {
      return this.board;
    }

    let nextMissing = this.nextMissing();
    let position = _.find(this.positions, {'x': nextMissing[0], 'y': nextMissing[1]});
    let availableNumbers = position.availableNumbers();

    if (availableNumbers.length == 0) {
      return;
    }

    for (let i = 0; i < availableNumbers.length; i++) {
      let sudokuClone = _.cloneDeep(this);
      sudokuClone.board[position.x][position.y] = availableNumbers[i];
      let solution = sudokuClone.getSolution();

      if (solution) {
        return solution;
      }
    }

    return undefined;
  }

  getSolutions(solutions = []) {
    if (this.isCompleted()) {
      solutions.push(this.board);
      return;
    }

    let nextMissing = this.nextMissing();
    let position = _.find(this.positions, {'x': nextMissing[0], 'y': nextMissing[1]});
    let availableNumbers = position.availableNumbers();

    if (availableNumbers.length == 0) {
      return;
    }

    for (let i = 0; i < availableNumbers.length; i++) {
      let sudokuClone = _.cloneDeep(this);
      sudokuClone.board[position.x][position.y] = availableNumbers[i];
      sudokuClone.getSolutions(solutions);
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

  isQuadratic() {
    return this.squareRoot === parseInt(this.squareRoot);
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

  isResolved() {
    return this.isValid() && this.isCompleted();
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

module.exports = Board;
