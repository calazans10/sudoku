#!/usr/bin/env node
'use strict';

const Board = require('../board');
const program = require('commander');
const Table = require('cli-table');

function newSoduku() {
  let board = Board.generate();
  let line = [];
  let table = new Table();

  for (let position of board.positions) {
    line.push(position.value);

    if (position.y === board.board.length - 1) {
      table.push(line);
      line = [];
    }
  }

  return table.toString();
}

program
  .version('0.0.1')
  .option('-n, --new', 'output a new sudoku', newSoduku)
  .parse(process.argv);

console.log('%s', program.new);
