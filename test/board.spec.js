'use strict';


import Board from '../src/board.js';
import Region from '../src/region.js';
import Position from '../src/position.js';
import ArrayFixture from './fixtures/arrays.js';
import BoardFixture from './fixtures/boards.js';
import chai from 'chai';

let expect = chai.expect;

describe('Board', () => {
  describe('#getSolution', () => {
    it('should be a Function', () => {
      expect(Board.prototype.getSolution).to.be.a('function');
    });

    it('should return a solution from the given board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.getSolution()).to.deep.equal(BoardFixture['9x9'].completed);
    }).timeout(10000);
  });

  describe('#getSolutions', () => {
    it('should be a Function', () => {
      expect(Board.prototype.getSolutions).to.be.a('function');
    });

    it('should return all the solutions from the given board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.getSolutions()).to.deep.equal([BoardFixture['9x9'].completed]);
    }).timeout(10000);
  });

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

  describe('#isValid', () => {
    it('should be a Function', () => {
      expect(Board.prototype.isValid).to.be.a('function');
    });

    it('should return true when the board 9x9 is valid', () => {
      let board = new Board(BoardFixture['9x9'].completed);
      expect(board.isValid()).to.equal(true);
    });

    it('should return true when the board 16x16 is valid', () => {
      let board = new Board(BoardFixture['16x16'].completed);
      expect(board.isValid()).to.equal(true);
    });

    it('should return false when the board 9x9 is invalid', () => {
      let board = new Board();
      board.board = BoardFixture['9x9'].invalid;
      expect(board.isValid()).to.equal(false);
    });

    it('should return false when the board 16x16 is invalid', () => {
      let board = new Board();
      board.board = BoardFixture['16x16'].invalid;
      expect(board.isValid()).to.equal(false);
    });
  });

  describe('#isCompleted', () => {
    it('should be a Function', () => {
      expect(Board.prototype.isCompleted).to.be.a('function');
    });

    it('should return true when the board 9x9 is completed', () => {
      let board = new Board(BoardFixture['9x9'].completed);
      expect(board.isCompleted()).to.equal(true);
    });

    it('should return true when the board 16x16 is completed', () => {
      let board = new Board(BoardFixture['16x16'].completed);
      expect(board.isCompleted()).to.equal(true);
    });

    it('should return false when the board 9x9 is not completed', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.isCompleted()).to.equal(false);
    });

    it('should return false when the board 16x16 is not completed', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      expect(board.isCompleted()).to.equal(false);
    });
  });

  describe('#positions', () => {
    it('should return the positions from the board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.positions).to.deep.equal(ArrayFixture.positions);
    });
  });

  describe('#regions', () => {
    it('should return the regions from the board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let result = ArrayFixture.lines.concat(ArrayFixture.columns, ArrayFixture.squares);
      expect(board.regions).to.deep.equal(result);
    });
  });

  describe('#lines', () => {
    it('should return the lines from the board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.lines).to.deep.equal(ArrayFixture.lines);
    });
  });

  describe('#columns', () => {
    it('should return the columns from the board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.columns).to.deep.equal(ArrayFixture.columns);
    });
  });

  describe('#squares', () => {
    it('should return the squares from the board', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      expect(board.squares).to.deep.equal(ArrayFixture.squares);
    });
  });

  describe('#numbers', () => {
    it('should return numbers to use on the board', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      let result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
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

    it('should return an exception when the board 9x9 is invalid', () => {
      let fn = () => { new Board(BoardFixture['9x9'].invalid); };
      expect(fn).to.throw('Board is invalid.');
    });

    it('should return an exception when the board 16x16 is invalid', () => {
      let fn = () => { new Board(BoardFixture['16x16'].invalid); };
      expect(fn).to.throw('Board is invalid.');
    });
  });
});
