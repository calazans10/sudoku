'use strict';

class Region {
  constructor(positions, board) {
    this.positions = positions;
    this.board = board;
  }

  // loop nas posições e chama invalid das posições em cada uma delas
  // se não tem nenhuma posição repetida nele
  isValid() {
    for (let position of this.positions) {
      if (!position.isValid()) {
        return false;
      }
    }
    return true;
  }

  isCompleted() {}
}

export default Region;
