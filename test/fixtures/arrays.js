'use strict';

const Board = require('../../src/board');
const BoardFixture = require('./boards');
const Position = require('../../src/position');
const Region = require('../../src/region');

let board = new Board(BoardFixture['9x9'].incompleted);

const ArrayFixture = {
  'lines': [
    new Region([
      new Position(0, 0, board), new Position(0, 1, board), new Position(0, 2, board),
      new Position(0, 3, board), new Position(0, 4, board), new Position(0, 5, board),
      new Position(0, 6, board), new Position(0, 7, board), new Position(0, 8, board)
    ], board),
    new Region([
      new Position(1, 0, board), new Position(1, 1, board), new Position(1, 2, board),
      new Position(1, 3, board), new Position(1, 4, board), new Position(1, 5, board),
      new Position(1, 6, board), new Position(1, 7, board), new Position(1, 8, board)
    ], board),
    new Region([
      new Position(2, 0, board), new Position(2, 1, board), new Position(2, 2, board),
      new Position(2, 3, board), new Position(2, 4, board), new Position(2, 5, board),
      new Position(2, 6, board), new Position(2, 7, board), new Position(2, 8, board)
    ], board),
    new Region([
      new Position(3, 0, board), new Position(3, 1, board), new Position(3, 2, board),
      new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
      new Position(3, 6, board), new Position(3, 7, board), new Position(3, 8, board)
    ], board),
    new Region([
      new Position(4, 0, board), new Position(4, 1, board), new Position(4, 2, board),
      new Position(4, 3, board), new Position(4, 4, board), new Position(4, 5, board),
      new Position(4, 6, board), new Position(4, 7, board), new Position(4, 8, board)
    ], board),
    new Region([
      new Position(5, 0, board), new Position(5, 1, board), new Position(5, 2, board),
      new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board),
      new Position(5, 6, board), new Position(5, 7, board), new Position(5, 8, board)
    ], board),
    new Region([
      new Position(6, 0, board), new Position(6, 1, board), new Position(6, 2, board),
      new Position(6, 3, board), new Position(6, 4, board), new Position(6, 5, board),
      new Position(6, 6, board), new Position(6, 7, board), new Position(6, 8, board)
    ], board),
    new Region([
      new Position(7, 0, board), new Position(7, 1, board), new Position(7, 2, board),
      new Position(7, 3, board), new Position(7, 4, board), new Position(7, 5, board),
      new Position(7, 6, board), new Position(7, 7, board), new Position(7, 8, board)
    ], board),
    new Region([
      new Position(8, 0, board), new Position(8, 1, board), new Position(8, 2, board),
      new Position(8, 3, board), new Position(8, 4, board), new Position(8, 5, board),
      new Position(8, 6, board), new Position(8, 7, board), new Position(8, 8, board)
    ], board)
  ],
  'columns': [
    new Region([
      new Position(0, 0, board),  new Position(1, 0, board),  new Position(2, 0, board),
      new Position(3, 0, board),  new Position(4, 0, board),  new Position(5, 0, board),
      new Position(6, 0, board),  new Position(7, 0, board),  new Position(8, 0, board)
    ], board),
    new Region([
      new Position(0, 1, board), new Position(1, 1, board), new Position(2, 1, board),
      new Position(3, 1, board), new Position(4, 1, board), new Position(5, 1, board),
      new Position(6, 1, board), new Position(7, 1, board), new Position(8, 1, board)
    ], board),
    new Region([
      new Position(0, 2, board), new Position(1, 2, board), new Position(2, 2, board),
      new Position(3, 2, board), new Position(4, 2, board), new Position(5, 2, board),
      new Position(6, 2, board), new Position(7, 2, board), new Position(8, 2, board)
    ], board),
    new Region([
      new Position(0, 3, board), new Position(1, 3, board), new Position(2, 3, board),
      new Position(3, 3, board), new Position(4, 3, board), new Position(5, 3, board),
      new Position(6, 3, board), new Position(7, 3, board), new Position(8, 3, board)
    ], board),
    new Region([
      new Position(0, 4, board), new Position(1, 4, board), new Position(2, 4, board),
      new Position(3, 4, board), new Position(4, 4, board), new Position(5, 4, board),
      new Position(6, 4, board), new Position(7, 4, board), new Position(8, 4, board)
    ], board),
    new Region([
      new Position(0, 5, board), new Position(1, 5, board), new Position(2, 5, board),
      new Position(3, 5, board), new Position(4, 5, board), new Position(5, 5, board),
      new Position(6, 5, board), new Position(7, 5, board), new Position(8, 5, board)
    ], board),
    new Region([
      new Position(0, 6, board), new Position(1, 6, board), new Position(2, 6, board),
      new Position(3, 6, board), new Position(4, 6, board), new Position(5, 6, board),
      new Position(6, 6, board), new Position(7, 6, board), new Position(8, 6, board)
    ], board),
    new Region([
      new Position(0, 7, board), new Position(1, 7, board), new Position(2, 7, board),
      new Position(3, 7, board), new Position(4, 7, board), new Position(5, 7, board),
      new Position(6, 7, board), new Position(7, 7, board), new Position(8, 7, board)
    ], board),
    new Region([
      new Position(0, 8, board), new Position(1, 8, board), new Position(2, 8, board),
      new Position(3, 8, board), new Position(4, 8, board), new Position(5, 8, board),
      new Position(6, 8, board), new Position(7, 8, board), new Position(8, 8, board)
    ], board)
  ],
  'squares': [
    new Region([
      new Position(0, 0, board), new Position(0, 1, board), new Position(0, 2, board),
      new Position(1, 0, board), new Position(1, 1, board), new Position(1, 2, board),
      new Position(2, 0, board), new Position(2, 1, board), new Position(2, 2, board)
    ], board),
    new Region([
      new Position(0, 3, board), new Position(0, 4, board), new Position(0, 5, board),
      new Position(1, 3, board), new Position(1, 4, board), new Position(1, 5, board),
      new Position(2, 3, board), new Position(2, 4, board), new Position(2, 5, board)
    ], board),
    new Region([
      new Position(0, 6, board), new Position(0, 7, board), new Position(0, 8, board),
      new Position(1, 6, board), new Position(1, 7, board), new Position(1, 8, board),
      new Position(2, 6, board), new Position(2, 7, board), new Position(2, 8, board)
    ], board),
    new Region([
      new Position(3, 0, board), new Position(3, 1, board), new Position(3, 2, board),
      new Position(4, 0, board), new Position(4, 1, board), new Position(4, 2, board),
      new Position(5, 0, board), new Position(5, 1, board), new Position(5, 2, board)
    ], board),
    new Region([
      new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
      new Position(4, 3, board), new Position(4, 4, board), new Position(4, 5, board),
      new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board)
    ], board),
    new Region([
      new Position(3, 6, board), new Position(3, 7, board), new Position(3, 8, board),
      new Position(4, 6, board), new Position(4, 7, board), new Position(4, 8, board),
      new Position(5, 6, board), new Position(5, 7, board), new Position(5, 8, board)
    ], board),
    new Region([
      new Position(6, 0, board), new Position(6, 1, board), new Position(6, 2, board),
      new Position(7, 0, board), new Position(7, 1, board), new Position(7, 2, board),
      new Position(8, 0, board), new Position(8, 1, board), new Position(8, 2, board)
    ], board),
    new Region([
      new Position(6, 3, board), new Position(6, 4, board), new Position(6, 5, board),
      new Position(7, 3, board), new Position(7, 4, board), new Position(7, 5, board),
      new Position(8, 3, board), new Position(8, 4, board), new Position(8, 5, board)
    ], board),
    new Region([
      new Position(6, 6, board), new Position(6, 7, board), new Position(6, 8, board),
      new Position(7, 6, board), new Position(7, 7, board), new Position(7, 8, board),
      new Position(8, 6, board), new Position(8, 7, board), new Position(8, 8, board)
    ], board)
  ],
  'positions': [
    new Position(0, 0, board), new Position(0, 1, board), new Position(0, 2, board),
    new Position(0, 3, board), new Position(0, 4, board), new Position(0, 5, board),
    new Position(0, 6, board), new Position(0, 7, board), new Position(0, 8, board),
    new Position(1, 0, board), new Position(1, 1, board), new Position(1, 2, board),
    new Position(1, 3, board), new Position(1, 4, board), new Position(1, 5, board),
    new Position(1, 6, board), new Position(1, 7, board), new Position(1, 8, board),
    new Position(2, 0, board), new Position(2, 1, board), new Position(2, 2, board),
    new Position(2, 3, board), new Position(2, 4, board), new Position(2, 5, board),
    new Position(2, 6, board), new Position(2, 7, board), new Position(2, 8, board),
    new Position(3, 0, board), new Position(3, 1, board), new Position(3, 2, board),
    new Position(3, 3, board), new Position(3, 4, board), new Position(3, 5, board),
    new Position(3, 6, board), new Position(3, 7, board), new Position(3, 8, board),
    new Position(4, 0, board), new Position(4, 1, board), new Position(4, 2, board),
    new Position(4, 3, board), new Position(4, 4, board), new Position(4, 5, board),
    new Position(4, 6, board), new Position(4, 7, board), new Position(4, 8, board),
    new Position(5, 0, board), new Position(5, 1, board), new Position(5, 2, board),
    new Position(5, 3, board), new Position(5, 4, board), new Position(5, 5, board),
    new Position(5, 6, board), new Position(5, 7, board), new Position(5, 8, board),
    new Position(6, 0, board), new Position(6, 1, board), new Position(6, 2, board),
    new Position(6, 3, board), new Position(6, 4, board), new Position(6, 5, board),
    new Position(6, 6, board), new Position(6, 7, board), new Position(6, 8, board),
    new Position(7, 0, board), new Position(7, 1, board), new Position(7, 2, board),
    new Position(7, 3, board), new Position(7, 4, board), new Position(7, 5, board),
    new Position(7, 6, board), new Position(7, 7, board), new Position(7, 8, board),
    new Position(8, 0, board), new Position(8, 1, board), new Position(8, 2, board),
    new Position(8, 3, board), new Position(8, 4, board), new Position(8, 5, board),
    new Position(8, 6, board), new Position(8, 7, board), new Position(8, 8, board),
  ]
};

module.exports = ArrayFixture;
