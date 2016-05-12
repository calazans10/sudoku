'use strict';

import Board from '../src/sudoku.js';
import boardFixtures from './fixtures/boards.js';
import chai from 'chai';

let expect = chai.expect;

describe('Board', () => {
  describe('#resolve', () => {
    it('should be a Function', () => {
      expect(Board.prototype.resolve).to.be.a('function');
    });

    it('should return a solution from the given board', () => {
      let board = new Board(boardFixtures.board9x9Incompleted);
      expect(board.resolve()).to.deep.equal(boardFixtures.board9x9Completed);
    }).timeout(10000);
  });

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
  // describe('#nextMissing', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.nextMissing).to.be.a('function');
  //   });
  //
  //   it('should return the positions on the board for the next missing value', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.nextMissing()).to.deep.equal([0, 2]);
  //
  //     sudoku2.board = boardIncomplete2;
  //     expect(sudoku2.nextMissing()).to.deep.equal([0, 1]);
  //   });
  //
  //   it('should return null when the board do not have missing values', () => {
  //     sudoku1.board = boardComplete1;
  //     expect(sudoku1.nextMissing()).to.be.null;
  //
  //     sudoku2.board = boardComplete2;
  //     expect(sudoku2.nextMissing()).to.be.null;
  //   });
  // });
  //
  // describe('#availableNumbers', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.availableNumbers).to.be.a('function');
  //   });
  //
  //   it('should return the available numbers for the given position', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.availableNumbers(0, 7)).to.deep.equal([1, 2, 4, 9]);
  //
  //     sudoku2.board = boardIncomplete2;
  //     expect(sudoku2.availableNumbers(7, 2)).to.deep.equal([1, 4, 6, 9, 10, 15]);
  //   });
  // });
  //
  // describe('#lines', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.lines).to.be.a('function');
  //   });
  //
  //   it('should return the lines from the board', () => {
  //     let result = [
  //       [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]],
  //       [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
  //       [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8]],
  //       [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8]],
  //       [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8]],
  //       [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8]],
  //       [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8]],
  //       [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8]],
  //       [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]]
  //     ];
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.lines()).to.deep.equal(result);
  //   });
  // });
  //
  // describe('#columns', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.columns).to.be.a('function');
  //   });
  //
  //   it('should return the columns from the board', () => {
  //     let result = [
  //       [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]],
  //       [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1]],
  //       [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2]],
  //       [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3]],
  //       [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4]],
  //       [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]],
  //       [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6]],
  //       [[0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7]],
  //       [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8]]
  //     ];
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.columns()).to.deep.equal(result);
  //   });
  // });
  //
  // describe('#squares', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.squares).to.be.a('function');
  //   });
  //
  //   it('should return the squares from the board', () => {
  //     let result = [
  //       [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
  //       [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  //       [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
  //       [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
  //       [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
  //       [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
  //       [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
  //       [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
  //       [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
  //     ];
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.squares()).to.deep.equal(result);
  //   });
  // });
  //
  // describe('#regions', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.regions).to.be.a('function');
  //   });
  //
  //   it('should return the regions from the board', () => {
  //     let result = [
  //       [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]],
  //       [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
  //       [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8]],
  //       [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8]],
  //       [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8]],
  //       [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8]],
  //       [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8]],
  //       [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8]],
  //       [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]],
  //       [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]],
  //       [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1]],
  //       [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2]],
  //       [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3]],
  //       [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4]],
  //       [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5]],
  //       [[0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6]],
  //       [[0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7]],
  //       [[0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8]],
  //       [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
  //       [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
  //       [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
  //       [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
  //       [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
  //       [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
  //       [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
  //       [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
  //       [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
  //     ];
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.regions()).to.deep.equal(result);
  //   });
  // });
  //
  // describe('#related', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.related).to.be.a('function');
  //   });
  //
  //   it('should return relateds by the given position', () => {
  //     sudoku1.board = boardIncomplete1;
  //     let result = sudoku1.lines()[3].concat(sudoku1.columns()[4], sudoku1.squares()[4]);
  //     expect(sudoku1.related(3, 4)).to.deep.equal(result);
  //   });
  // });
  //
  // describe('#relatedByLine', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.relatedByLine).to.be.a('function');
  //   });
  //
  //   it('should return related lines by the given position', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.relatedByLine(3, 4)).to.deep.equal(sudoku1.lines()[3]);
  //   });
  // });
  //
  // describe('#relatedByColumn', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.relatedByColumn).to.be.a('function');
  //   });
  //
  //   it('should return related columns by the given position', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.relatedByColumn(3, 4)).to.deep.equal(sudoku1.columns()[4]);
  //   });
  // });
  //
  // describe('#relatedBySquare', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.relatedBySquare).to.be.a('function');
  //   });
  //
  //   it('should return related regions by the given position', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.relatedBySquare(3, 4)).to.deep.equal(sudoku1.squares()[4]);
  //   });
  // });
  //
  // describe('#relatedPivot', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.relatedPivot).to.be.a('function');
  //   });
  //
  //   it('should return related pivot by the given position', () => {
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.relatedPivot(7, 8)).to.deep.equal([6, 6]);
  //   });
  // });
  //
  // describe('when instantiated', () => {
  //   it('should return an Object', () => {
  //     expect(sudoku1).to.be.an('object');
  //   });
  //
  //   it('should return an exception when the board contains string as items', () => {
  //     let board = [
  //       [5, 3, 4,  6,  7, 8, 9, 1, 2],
  //       [6, 7, 2,  1,  9, 5, 3, 4, 8],
  //       [1, 9, 8,  3,  4, 2, 5, 6, 7],
  //       [8, 5, 9, 'a', 6, 1, 4, 2, 3],
  //       [4, 2, 6,  8,  5, 3, 7, 9, 1],
  //       [7, 1, 3,  9,  2, 4, 8, 5, 6],
  //       [9, 6, 1,  5,  3, 7, 2, 8, 4],
  //       [2, 8, 7,  4,  1, 9, 6, 3, 5],
  //       [3, 4, 5,  2,  8, 6, 1, 7, 9],
  //     ];
  //     let fn = () => { new Board(board); };
  //     expect(fn).to.throw('Board is invalid.');
  //   });
  //
  //   it('should return an exception when the board contains elements out of range', () => {
  //     let board = [
  //       [5, 3, 4,  6,  7, 8, 9, 1, 2],
  //       [6, 7, 2,  1,  9, 5, 3, 4, 8],
  //       [1, 9, 8,  3,  4, 2, 5, 6, 7],
  //       [8, 5, 9, 15, 6, 1, 4, 2, 3],
  //       [4, 2, 6,  8,  5, 3, 7, 9, 1],
  //       [7, 1, 3,  9,  2, 4, 8, 5, 6],
  //       [9, 6, 1,  5,  3, 7, 2, 8, 4],
  //       [2, 8, 7,  4,  1, 9, 6, 3, 5],
  //       [3, 4, 5,  2,  8, 6, 1, 7, 9],
  //     ];
  //     let fn = () => { new Board(board); };
  //     expect(fn).to.throw('Board is invalid.');
  //   });
  // });
  //
  // describe('#pivots', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.pivots).to.be.a('function');
  //   });
  //
  //   it('should return the pivot positions from the board', () => {
  //     let result = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
  //     sudoku1.board = boardIncomplete1;
  //     expect(sudoku1.pivots()).to.deep.equal(result);
  //   });
  // });
  //
  // describe('#arrayIntersection', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.arrayIntersection).to.be.a('function');
  //   });
  //
  //   it('should return the difference between two arrays', () => {
  //     expect(sudoku1.arrayIntersection([2, 3, 4], [3, 2, 5, 6])).to.deep.equal([4, 5, 6]);
  //   });
  // });
  //
  // describe('#permutation', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.permutation).to.be.a('function');
  //   });
  //
  //   it('should return the permutation between two numbers', () => {
  //     let result = [[0, 0], [0, 1], [0, 2], [0, 3], [1, 0], [1, 1], [1, 2], [1, 3]];
  //     expect(sudoku1.permutation(1, 3)).to.deep.equal(result);
  //   });
  // });
});
