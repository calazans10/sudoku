#!/usr/bin/env node
'use strict';

const Board = require('../board');
const program = require('commander');

program
  .version('0.0.1')
  .option('-g, --generate', 'output a initial sudoku', Board.generate)
  .parse(process.argv);

console.log(' board: %j', program.generate);
