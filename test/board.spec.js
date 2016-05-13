'use strict';

import Board from '../src/board.js';
import BoardFixture from './fixtures/boards.js';
import chai from 'chai';

let expect = chai.expect;

describe('Board', () => {
  // describe('#getSolution', () => {
  //   it('should be a Function', () => {
  //     expect(Board.prototype.getSolution).to.be.a('function');
  //   });
  //
  //   it('should return a solution from the given board', () => {
  //     let board = new Board(BoardFixture['9x9'].incompleted);
  //     expect(board.getSolution()).to.deep.equal(BoardFixture['9x9'].completed);
  //   }).timeout(10000);
  // });
  //
  // describe('#getSolutions', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.getSolutions).to.be.a('function');
  //   });
  //
  //   it('should return all the solutions from the given board', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.getSolutions()).to.deep.equal([boardComplete1]);
  //   }).timeout(10000);
  // });
  //
  describe('#nextMissing', () => {
    it('should be a Function', () => {
      expect(Board.prototype.nextMissing).to.be.a('function');
    });

    it('should return the next missing value for the board 9x9', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.nextMissing()).to.deep.equal([0, 2]);
    });

    it('should return the next missing value for the board 16x16', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      expect(board.nextMissing()).to.deep.equal([0, 1]);
    });

    it('should return null when the board 9x9 do not have missing values', () => {
      let board = new Board(BoardFixture['9x9'].completed);
      expect(board.nextMissing()).to.be.null;
    });

    it('should return null when the board 16x16 do not have missing values', () => {
      let board = new Board(BoardFixture['16x16'].completed);
      expect(board.nextMissing()).to.be.null;
    });
  });
  //
  // describe('#isValid', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.isValid).to.be.a('function');
  //   });
  //
  //   it('should return true when the board is valid', () => {
  //     sudoku1.board = boardComplete1;
  //     expect(sudoku1.isValid()).to.equal(true);
  //
  //     sudoku2.board = boardComplete2;
  //     expect(sudoku2.isValid()).to.equal(true);
  //   });
  //
  //   it('should return false when the board is invalid', () => {
  //     sudoku1.board = boardComplete1;
  //     sudoku1.board[1][1] = 5;
  //     expect(sudoku1.isValid()).to.equal(false);
  //
  //     sudoku2.board = boardComplete2;
  //     sudoku2.board[2][2] = 5;
  //     expect(sudoku2.isValid()).to.equal(false);
  //   });
  // });
  //
  // describe('#isCompleted', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.isCompleted).to.be.a('function');
  //   });
  //
  //   it('should return true when the board is completed', () => {
  //     sudoku1.board = boardComplete1;
  //     expect(sudoku1.isCompleted()).to.equal(true);
  //
  //     sudoku2.board = boardComplete2;
  //     expect(sudoku2.isCompleted()).to.equal(true);
  //   });
  //
  //   it('should return false when the board is not completed', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.isCompleted()).to.equal(false);
  //
  //     sudoku2.board = boardIncomplete2;
  //     expect(sudoku2.isCompleted()).to.equal(false);
  //   });
  // });

  describe('#lines', () => {
    it('should return the lines from the board', () => {
      let result = [
        [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]],
        [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
        [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8]],
        [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8]],
        [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8]],
        [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8]],
        [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8]],
        [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8]],
        [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]]
      ];
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.lines).to.deep.equal(result);
    });
  });

  describe('#columns', () => {
    it('should return the columns from the board', () => {
      let result = [
        [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]],
        [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1]],
        [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2]],
        [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3]],
        [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4]],
        [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]],
        [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6]],
        [[0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7]],
        [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8]]
      ];
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.columns).to.deep.equal(result);
    });
  });

  describe('#squares', () => {
    it('should return the squares from the board', () => {
      let result = [
        [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
        [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
        [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
        [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
        [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
        [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
        [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
        [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
        [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
      ];
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.squares).to.deep.equal(result);
    });
  });

  describe('#regions', () => {
    it('should return the regions from the board', () => {
      let result = [
        [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]],
        [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
        [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8]],
        [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8]],
        [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8]],
        [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8]],
        [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8]],
        [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8]],
        [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]],
        [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]],
        [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1]],
        [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2]],
        [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3]],
        [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4]],
        [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]],
        [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6]],
        [[0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7]],
        [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8]],
        [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
        [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
        [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
        [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
        [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
        [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
        [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
        [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
        [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
      ];
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.regions).to.deep.equal(result);
    });
  });

  describe('#pivots', () => {
    it('should return the pivot positions from the board', () => {
      let result = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.pivots).to.deep.equal(result);
    });
  });

  describe('#numbers', () => {
    it('should return numbers to use on the board', () => {
      let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let board = new Board(BoardFixture['16x16'].incompleted);
      expect(board.numbers).to.deep.equal(result);
    });
  });

  describe('#squareRoot', () => {
    it('should return the square root from the board', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      expect(board.squareRoot).to.deep.equal(4);
    });
  });

  describe('when instantiated', () => {
    it('should return an Object', () => {
      let board = new Board();
      expect(board).to.be.an('object');
    });
    //
    // it('should return an exception when the board contains string as items', () => {
    //   let fn = () => { new Board(BoardFixture['9x9'].invalid); };
    //   expect(fn).to.throw('Board is invalid.');
    // });
    //
    // it('should return an exception when the board contains elements out of range', () => {
    //   let fn = () => { new Board(BoardFixture['16x16'].invalid); };
    //   expect(fn).to.throw('Board is invalid.');
    // });
  });
});
