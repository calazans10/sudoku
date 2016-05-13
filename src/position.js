'use strict';

import arrayIntersection from './modules/arrayIntersection';

class Position {
  constructor(x, y, board) {
    this.x = x;
    this.y = y;
    this.board = board;
  }

  // verifica se é um número dentro do range do board
  isvalid() {}

  availableNumbers() {
    let relatedNumbers = [];

    this.related.forEach(position => {
      if (this.board.board[position[0]][position[1]] !== 0) {
        relatedNumbers.push(this.board.board[position[0]][position[1]]);
      }
    });
    
    return arrayIntersection(this.board.numbers.slice(1), relatedNumbers);
  }

  get related() {
    return this.relatedByLine.concat(this.relatedByColumn, this.relatedBySquare);
  }

  get relatedByLine() {
    return this.board.lines[this.x];
  }

  get relatedByColumn() {
    return this.board.columns[this.y];
  }

  get relatedBySquare() {
    let index = this.relatedPivot[1] / this.board.squareRoot + this.relatedPivot[0];
    return this.board.squares[index];
  }

  get relatedPivot()     {
    return [this.x - (this.x % this.board.squareRoot), this.y - (this.y % this.board.squareRoot)];
  }

  get value() {
    return this.board.board[this.x][this.y];
  }
}

export default Position;
