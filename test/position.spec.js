'use strict';

const chai = require('chai');
const Board = require('../src/board');
const Position = require('../src/position');
const BoardFixture = require('./fixtures/boards');

let expect = chai.expect;

describe('Position', () => {
  describe('#availableNumbers', () => {
    it('should be a Function', () => {
      expect(Position.prototype.availableNumbers).to.be.a('function');
    });

    it('should return the available numbers by the given position on the board 9x9', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(0, 7, board);
      expect(position.availableNumbers()).to.deep.equal([1, 2, 4, 9]);
    });

    it('should return the available numbers by the given position on the board 16x16', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      let position = new Position(7, 2, board);
      expect(position.availableNumbers()).to.deep.equal([1, 4, 6, 9, 10, 15]);
    });
  });

  describe('#isValid', () => {
    it('should be a Function', () => {
      expect(Position.prototype.isValid).to.be.a('function');
    });

    it('should return true when the position is valid', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(0, 7, board);
      expect(position.isValid()).to.equal(true);
    });

    it('should return false when the position on the board is out range', () => {
      let board = new Board();
      board.board = BoardFixture['16x16'].invalid;
      let position = new Position(7, 14, board);
      expect(position.isValid()).to.equal(false);
    });

    it('should return false when the position on the board is not a number', () => {
      let board = new Board();
      board.board = BoardFixture['9x9'].invalid;
      let position = new Position(3, 3, board);
      expect(position.isValid()).to.equal(false);
    });
  });

  describe('#related', () => {
    it('should return the related by the given position', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      let result = [
        new Position(3, 0, board), new Position(3, 1, board), new Position(3, 2, board),
        new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
        new Position(3, 6, board), new Position(3, 7, board), new Position(3, 8, board),
        new Position(0, 4, board), new Position(1, 4, board), new Position(2, 4, board),
        new Position(3, 4, board), new Position(4, 4, board), new Position(5, 4, board),
        new Position(6, 4, board), new Position(7, 4, board), new Position(8, 4, board),
        new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
        new Position(4, 3, board), new Position(4, 4, board), new Position(4, 5, board),
        new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board)
      ];
      expect(position.related).to.deep.equal(result);
    });
  });

  describe('#relatedByLine', () => {
    it('should return the related line by the given position', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      let result = [
        new Position(3, 0, board), new Position(3, 1, board), new Position(3, 2, board),
        new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
        new Position(3, 6, board), new Position(3, 7, board), new Position(3, 8, board)
      ];
      expect(position.relatedByLine).to.deep.equal(result);
    });
  });

  describe('#relatedByColumn', () => {
    it('should return the related column by the given position', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      let result = [
        new Position(0, 4, board), new Position(1, 4, board), new Position(2, 4, board),
        new Position(3, 4, board), new Position(4, 4, board), new Position(5, 4, board),
        new Position(6, 4, board), new Position(7, 4, board), new Position(8, 4, board)
      ];
      expect(position.relatedByColumn).to.deep.equal(result);
    });
  });

  describe('#relatedBySquare', () => {
    it('should return the related square by the given position', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(3, 4, board);
      let result = [
        new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
        new Position(4, 3, board), new Position(4, 4, board), new Position(4, 5, board),
        new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board)
      ];
      expect(position.relatedBySquare).to.deep.equal(result);
    });
  });

  describe('#relatedPivot', () => {
    it('should return the related pivot by the given position', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let position = new Position(7, 8, board);
      expect(position.relatedPivot).to.deep.equal(new Position(6, 6, board));
    });
  });

  describe('#value', () => {
    it('should return the value by the given position', () => {
      let board = new Board(BoardFixture['16x16'].completed);
      let position = new Position(5, 10, board);
      expect(position.value).to.equal(16);
    });

    it('should set another value by the given position', () => {
      let board = new Board(BoardFixture['16x16'].incompleted);
      let position = new Position(0, 3, board);
      position.value = 12;
      expect(position.value).to.equal(12);
    });
  });

  describe('when instantiated', () => {
    it('should return an Object', () => {
      let position = new Position();
      expect(position).to.be.an('object');
    });
  });
});
