#!/usr/bin/env node
'use strict';

const Board = require('../board');
const program = require('commander');
const Table = require('cli-table');

function newSoduku() {
  let board = Board.generate();
  let count = 0;
  let line = [];
  let table = new Table();

  for (let position of board.positions) {
    if (count === board.board.length) {
      table.push(line);
      line = [];
      count = 0;
    } else {
      line.push(position.value);
      count++;
    }
  }

  return table.toString();
}

program
  .version('0.0.1')
  .option('-n, --new', 'output a new sudoku', newSoduku)
  .parse(process.argv);

console.log('%s', program.new);
