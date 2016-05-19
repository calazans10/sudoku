'use strict';

import arrayIntersection from './modules/arrayIntersection';

class Region {
  constructor(positions, board) {
    this.positions = positions;
    this.board = board;
  }

  isValid() {
    let positions = this.positions;

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (
          !positions[i].isValid() ||
          (positions[i].value !== 0 && positions[i].value === positions[j].value)
        ) {
          return false;
        }
      }
    }

    return true;
  }

  isCompleted() {
    let numbers = this.positions.map(position => position.value);
    return arrayIntersection(this.board.numbers.slice(1), numbers).length === 0;
  }
}

export default Region;
