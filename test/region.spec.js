'use strict';

import Board from '../src/board.js';
import Position from '../src/position.js';
import Region from '../src/region.js';
import BoardFixture from './fixtures/boards.js';
import chai from 'chai';

let expect = chai.expect;

describe('Region', () => {
  describe('#isValid', () => {
    it('should be a Function', () => {
      expect(Region.prototype.isValid).to.be.a('function');
    });

    it('should return true when the region is valid', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let positions = [
        new Position(5, 0, board), new Position(5, 1, board), new Position(5, 2, board),
        new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board),
        new Position(5, 6, board), new Position(5, 7, board), new Position(5, 8, board),
      ];
      let region = new Region(positions, board);
      expect(region.isValid()).to.equal(true);
    });

    it('should return false when the region is not valid', () => {
      let board = new Board(BoardFixture['9x9'].invalid);
      let positions = [
        new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
        new Position(4, 3, board), new Position(4, 4, board), new Position(4, 5, board),
        new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board),
      ];
      let region = new Region(positions, board);
      expect(region.isValid()).to.equal(false);
    });
  });

  describe('#isCompleted', () => {
    it('should be a Function', () => {
      expect(Region.prototype.isCompleted).to.be.a('function');
    });

    it('should return true when the region is completed', () => {
      let board = new Board(BoardFixture['9x9'].completed);
      let positions = [
        new Position(5, 0, board), new Position(5, 1, board), new Position(5, 2, board),
        new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board),
        new Position(5, 6, board), new Position(5, 7, board), new Position(5, 8, board),
      ];
      let region = new Region(positions, board);
      expect(region.isCompleted()).to.equal(true);
    });

    it('should return false when the region is not completed', () => {
      let board = new Board(BoardFixture['9x9'].incompleted);
      let positions = [
        new Position(3, 0, board), new Position(3, 1, board), new Position(3, 2, board),
        new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
        new Position(3, 6, board), new Position(3, 7, board), new Position(3, 8, board),
      ];
      let region = new Region(positions, board);
      expect(region.isCompleted()).to.equal(false);
    });
  });

  describe('when instantiated', () => {
    it('should return an Object', () => {
      let region = new Region();
      expect(region).to.be.an('object');
    });
  });
});
