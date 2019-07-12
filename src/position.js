'use strict';

const arrayIntersection = require('./utils/arrayIntersection');

class Position {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.board = board;
  }

  availableNumbers() {
    let relatedNumbers = [];

    this.related.forEach(position => {
      if (position.value !== 0) {
        relatedNumbers.push(position.value);
      }
    });

    return arrayIntersection(this.board.numbers.slice(1), relatedNumbers);
  }

  isValid() {
    return this.board.numbers.indexOf(this.value) !== -1;
  }

  get related() {
    return this.relatedByLine.concat(this.relatedByColumn, this.relatedBySquare);
  }

  get relatedByLine() {
    return this.board.lines[this.x].positions;
  }

  get relatedByColumn() {
    return this.board.columns[this.y].positions;
  }

  get relatedBySquare() {
    let index = this.relatedPivot.y / this.board.squareRoot + this.relatedPivot.x;
    return this.board.squares[index].positions;
  }

  get relatedPivot() {
    return new Position(
      this.x - (this.x % this.board.squareRoot),
      this.y - (this.y % this.board.squareRoot),
      this.board
    );
  }

  get value() {
    return this.board.board[this.x][this.y];
  }

  set value(newValue) {
    this.board.board[this.x][this.y] = newValue;
  }
}

module.exports = Position;
