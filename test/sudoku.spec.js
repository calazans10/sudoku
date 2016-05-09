'use strict';

import Sudoku from '../src/sudoku.js';
import chai from 'chai';

let expect = chai.expect;

describe('Sudoku', () => {
  let sudoku1, sudoku2, gridComplete1, gridComplete2, gridIncomplete1, gridIncomplete2, gridIncomplete3;

  beforeEach(() => {
    sudoku1 = new Sudoku();
    sudoku2 = new Sudoku();

    gridIncomplete1 = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];
    gridIncomplete3 = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 0, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 0, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 0, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];
    gridComplete1 = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ];

    gridIncomplete2 = [
      [13,  0,  0, 0,  1, 11,  0,  2,  0,  3,  0,  0, 14, 16,  7,  6],
      [ 0,  2,  0, 6,  0,  0, 16,  0,  0,  0,  5, 13,  0,  0,  3,  0],
      [ 0,  0, 11, 0,  0,  0,  0,  0,  0,  0,  0,  0, 15,  0,  1,  0],
      [ 0,  0,  0, 0,  0,  7,  0,  6,  2, 11,  1,  0,  0, 13,  0,  8],
      [16,  0,  0, 0, 13,  0,  0,  0, 12,  0,  9,  0,  6,  0,  0,  1],
      [ 0,  0,  7, 0,  2,  0,  6,  0,  0,  0,  0,  5,  8,  9,  4,  3],
      [ 2,  0,  0, 0,  0,  0,  0,  0,  0, 10,  0,  3,  0,  0,  0,  0],
      [ 0,  5,  0, 0,  3,  0,  7,  0,  0,  8, 13,  0,  2,  0,  0,  0],
      [ 0, 10, 14, 0,  7,  9,  0,  0,  1,  0,  0,  0,  0, 11,  6,  0],
      [ 0,  0,  8, 0,  0,  2,  0, 12,  0, 13,  7,  0,  1,  0,  0,  5],
      [ 3,  0,  0, 1,  0,  0, 14,  5, 10,  0,  0,  0,  0,  8,  2,  0],
      [ 0,  0,  2, 0,  0,  0,  0,  0,  3,  0,  0,  8,  4,  0,  0, 10],
      [ 0,  0,  0, 9,  0,  0,  0,  1,  0, 12,  8,  0,  0,  2,  0, 14],
      [ 0,  0,  0, 0, 12,  0,  2,  0, 11,  0,  0,  0,  0,  6,  8,  0],
      [ 0,  4,  0, 0,  6,  8,  0,  7,  0,  0,  0,  2, 13,  0,  0, 15],
      [ 8,  0, 12, 0,  0,  0,  0,  0, 13,  0,  6,  0,  0,  1,  0,  0]
    ];
    gridComplete2 = [
      [13,  8,  5, 10,  1, 11,  9,  2,  4,  3, 15, 12, 14, 16,  7,  6],
      [ 9,  2,  1,  6, 15, 14, 16, 10,  8,  7,  5, 13, 11,  4,  3, 12],
      [12, 16, 11,  7,  8, 13,  3,  4,  9,  6, 10, 14, 15,  5,  1,  2],
      [14, 15,  3,  4,  5,  7, 12,  6,  2, 11,  1, 16, 10, 13,  9,  8],
      [16, 14,  4,  3, 13, 10,  5,  8, 12,  2,  9, 11,  6,  7, 15,  1],
      [10, 13,  7, 12,  2,  1,  6, 11, 15, 14, 16,  5,  8,  9,  4,  3],
      [ 2,  1,  6,  8,  9, 12, 15, 16,  7, 10,  4,  3,  5, 14, 13, 11],
      [15,  5,  9, 11,  3,  4,  7, 14,  6,  8, 13,  1,  2, 12, 10, 16],
      [ 4, 10, 14, 16,  7,  9,  8,  3,  1,  5,  2, 15, 12, 11,  6, 13],
      [11,  6,  8, 15, 10,  2,  4, 12, 14, 13,  7,  9,  1,  3, 16,  5],
      [ 3, 12, 13,  1, 16, 15, 14,  5, 10,  4, 11,  6,  9,  8,  2,  7],
      [ 7,  9,  2,  5, 11,  6,  1, 13,  3, 16, 12,  8,  4, 15, 14, 10],
      [ 6,  3, 15,  9,  4,  5, 13,  1, 16, 12,  8, 10,  7,  2, 11, 14],
      [ 5,  7, 10, 13, 12, 16,  2, 15, 11,  1, 14,  4,  3,  6,  8,  9],
      [ 1,  4, 16, 14,  6,  8, 11,  7,  5,  9,  3,  2, 13, 10, 12, 15],
      [ 8, 11, 12,  2, 14,  3, 10,  9, 13, 15,  6,  7, 16,  1,  5,  4]
    ];
  });

  describe('when instantiated', () => {
    it('should return an Object', () => {
      expect(sudoku1).to.be.an('object');
    });
  });

  describe('#pivots', () => {
    it('should be a Function', () => {
      expect(sudoku1.pivots).to.be.a('function');
    });

    it('should return the pivot positions from the grid', () => {
      let result = [[0, 0], [0, 3], [0, 6], [3, 0], [3, 3], [3, 6], [6, 0], [6, 3], [6, 6]];
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.pivots()).to.deep.equal(result);
    });
  });

  describe('#arrayIntersection', () => {
    it('should be a Function', () => {
      expect(sudoku1.arrayIntersection).to.be.a('function');
    });

    it('should return the difference between two arrays', () => {
      expect(sudoku1.arrayIntersection([2, 3, 4], [3, 2, 5, 6])).to.deep.equal([4, 5, 6]);
    });
  });

  describe('#permutation', () => {
    it('should be a Function', () => {
      expect(sudoku1.permutation).to.be.a('function');
    });

    it('should return the permutation between two numbers', () => {
      let result = [[0, 0], [0, 1], [0, 2], [0, 3], [1, 0], [1, 1], [1, 2], [1, 3]];
      expect(sudoku1.permutation(1, 3)).to.deep.equal(result);
    });
  });

  describe('#lines', () => {
    it('should be a Function', () => {
      expect(sudoku1.lines).to.be.a('function');
    });

    it('should return the lines from the grid', () => {
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
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.lines()).to.deep.equal(result);
    });
  });

  describe('#columns', () => {
    it('should be a Function', () => {
      expect(sudoku1.columns).to.be.a('function');
    });

    it('should return the columns from the grid', () => {
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
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.columns()).to.deep.equal(result);
    });
  });

  describe('#squares', () => {
    it('should be a Function', () => {
      expect(sudoku1.squares).to.be.a('function');
    });

    it('should return the squares from the grid', () => {
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
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.squares()).to.deep.equal(result);
    });
  });

  describe('#regions', () => {
    it('should be a Function', () => {
      expect(sudoku1.regions).to.be.a('function');
    });

    it('should return the regions from the grid', () => {
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
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.regions()).to.deep.equal(result);
    });
  });

  describe('#relatedPivot', () => {
    it('should be a Function', () => {
      expect(sudoku1.relatedPivot).to.be.a('function');
    });

    it('should return related pivot by the given position', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.relatedPivot(7, 8)).to.deep.equal([6, 6]);
    });
  });

  describe('#relatedByLine', () => {
    it('should be a Function', () => {
      expect(sudoku1.relatedByLine).to.be.a('function');
    });

    it('should return related lines by the given position', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.relatedByLine(3, 4)).to.deep.equal(sudoku1.lines()[3]);
    });
  });

  describe('#relatedByColumn', () => {
    it('should be a Function', () => {
      expect(sudoku1.relatedByColumn).to.be.a('function');
    });

    it('should return related columns by the given position', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.relatedByColumn(3, 4)).to.deep.equal(sudoku1.columns()[4]);
    });
  });

  describe('#relatedBySquare', () => {
    it('should be a Function', () => {
      expect(sudoku1.relatedBySquare).to.be.a('function');
    });

    it('should return related regions by the given position', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.relatedBySquare(3, 4)).to.deep.equal(sudoku1.squares()[4]);
    });
  });

  describe('#related', () => {
    it('should be a Function', () => {
      expect(sudoku1.related).to.be.a('function');
    });

    it('should return relateds by the given position', () => {
      sudoku1.grid = gridIncomplete1;
      let result = sudoku1.lines()[3].concat(sudoku1.columns()[4], sudoku1.squares()[4]);
      expect(sudoku1.related(3, 4)).to.deep.equal(result);
    });
  });

  describe('#isCompleted', () => {
    it('should be a Function', () => {
      expect(sudoku1.isCompleted).to.be.a('function');
    });

    it('should return true when the grid is completed', () => {
      sudoku1.grid = gridComplete1;
      expect(sudoku1.isCompleted()).to.equal(true);

      sudoku2.grid = gridComplete2;
      expect(sudoku2.isCompleted()).to.equal(true);
    });

    it('should return false when the grid is not completed', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.isCompleted()).to.equal(false);

      sudoku2.grid = gridIncomplete2;
      expect(sudoku2.isCompleted()).to.equal(false);
    });
  });

  describe('#isValid', () => {
    it('should be a Function', () => {
      expect(sudoku1.isValid).to.be.a('function');
    });

    it('should return true when the grid is valid', () => {
      sudoku1.grid = gridComplete1;
      expect(sudoku1.isValid()).to.equal(true);

      sudoku2.grid = gridComplete2;
      expect(sudoku2.isValid()).to.equal(true);
    });

    it('should return false when the grid is invalid', () => {
      sudoku1.grid = gridComplete1;
      sudoku1.grid[1][1] = 5;
      expect(sudoku1.isValid()).to.equal(false);

      sudoku2.grid = gridComplete2;
      sudoku2.grid[2][2] = 5;
      expect(sudoku2.isValid()).to.equal(false);
    });
  });

  describe('#nextMissing', () => {
    it('should be a Function', () => {
      expect(sudoku1.nextMissing).to.be.a('function');
    });

    it('should return the positions on the grid for the next missing value', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.nextMissing()).to.deep.equal([0, 2]);

      sudoku2.grid = gridIncomplete2;
      expect(sudoku2.nextMissing()).to.deep.equal([0, 1]);
    });

    it('should return null when the grid do not have missing values', () => {
      sudoku1.grid = gridComplete1;
      expect(sudoku1.nextMissing()).to.be.null;

      sudoku2.grid = gridComplete2;
      expect(sudoku2.nextMissing()).to.be.null;
    });
  });

  describe('#availableNumbers', () => {
    it('should be a Function', () => {
      expect(sudoku1.availableNumbers).to.be.a('function');
    });

    it('should return the available numbers for the given position', () => {
      sudoku1.grid = gridIncomplete1;
      expect(sudoku1.availableNumbers(0, 7)).to.deep.equal([1, 2, 4, 9]);

      sudoku2.grid = gridIncomplete2;
      expect(sudoku2.availableNumbers(7, 2)).to.deep.equal([1, 4, 6, 9, 13, 11, 14, 12, 16]);
    });
  });

  describe('#getSolutions', () => {
    it('should be a Function', () => {
      expect(sudoku1.getSolutions).to.be.a('function');
    });
  });

  describe('#stepBack', () => {
    it('should be a Function 2', () => {
      let states = [
        {
          grid:[
            [5, 3, 0, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ],
          position: [0, 2],
          availableNumberIndex: 0
        },
        {
          grid:[
            [5, 3, 1, 0, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ],
          position: [0, 3],
          availableNumberIndex: 0
        },
        {
          grid:[
            [5, 3, 1, 2, 7, 0, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ],
          position: [0, 5],
          availableNumberIndex: 0
        },
        {
          grid:[
            [5, 3, 1, 2, 7, 4, 0, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ],
          position: [0, 6],
          availableNumberIndex: 0
        },
        {
          grid:[
            [5, 3, 1, 2, 7, 4, 8, 0, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ],
          position: [0, 7],
          availableNumberIndex: 0
        },
        {
          grid:[
            [5, 3, 1, 2, 7, 4, 8, 9, 0],
            [6, 0, 0, 1, 9, 5, 0, 0, 0],
            [0, 9, 8, 0, 0, 0, 0, 6, 0],
            [8, 0, 0, 0, 6, 0, 0, 0, 3],
            [4, 0, 0, 8, 0, 3, 0, 0, 1],
            [7, 0, 0, 0, 2, 0, 0, 0, 6],
            [0, 6, 0, 0, 0, 0, 2, 8, 0],
            [0, 0, 0, 4, 1, 9, 0, 0, 5],
            [0, 0, 0, 0, 8, 0, 0, 7, 9]
          ],
          position: [0, 8],
          availableNumberIndex: 0
        }
      ];

      sudoku2.grid = states;
      expect(sudoku1.stepBack()).to.be.equal(true);
    });
  });

  // describe('#resolve', () => {
  //   it('should be a Function', () => {
  //     expect(sudoku1.resolve).to.be.a('function');
  //   });

  //   it('should return the solution from the given grid', () => {
  //     sudoku1.grid = gridIncomplete3;
  //     expect(sudoku1.resolve()).to.deep.equal(gridComplete1);
  //   });

  //   it('should return the solution from the given grid 2', () => {
  //     sudoku2.grid = gridIncomplete1;
  //     expect(sudoku2.resolve()).to.deep.equal(gridComplete1);
  //   });
  // });
});
