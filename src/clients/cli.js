#!/usr/bin/env node --harmony
'use strict';

const _ = require('lodash');
const Board = require('../board');
const chalk = require('chalk');
const Menu = require('terminal-menu');
const prompt = require('prompt');
const Table = require('cli-table');


class Sudoku {
  constructor(difficulty) {
    this.board = Board.generate(difficulty);
    this.filled = [];
    this.displayMenu();
  }

  displayBoard() {
    let table = new Table();

    for (let line of this.board.lines) {
      line = line.positions.map(position => {
        let value = position.value || ' ';
        return _.some(this.filled, position) ? chalk.green(value) : value;
      });
      table.push(line);
    }

    return table.toString();
  }

  displayMenu() {
    console.log(this.displayBoard());

    if (this.board.isResolved()) {
      console.log(chalk.green('Congrats! You have completed your sudoku'));
    } else {
      this.askAction();
    }
  }

  askAction() {
    prompt.start();

    prompt.get([{
      name: 'values',
      message: '>',
      required: true
    }], (err, result) => {
      if (result.values === 'hint') {
        this.actionHint(result.values);
      } else if (result.values.split(' ').length === 3) {
        this.actionFill(result.values);
      } else {
        this.actionMissing();
      }

      this.displayMenu();
    });
  }

  actionMissing() {
    console.log(chalk.red('Try again'));
  }

  actionHint() {
    let nextMissing = this.board.nextMissing();

    if (!nextMissing) {
      console.log('No hints found');
    } else {
      let position = _.find(this.board.positions, {'x': nextMissing[0], 'y': nextMissing[1]});
      console.log(`${position.x + 1} ${position.y + 1} ${position.availableNumbers()[0]}`);
    }
  }

  actionFill(values) {
    values = values.split(' ').map(num => parseInt(num));
    let position = _.find(this.board.positions, {'x': values[0] - 1, 'y': values[1] - 1});

    if (!position) {
      console.log(chalk.red('Violation found. The given position doesn\'t exist'));
    } else if (position.availableNumbers().indexOf(values[2]) === -1) {
      console.log(chalk.red(`Violation found. You can\'t use ${values[2]} there`));
    } else {
      position.value = values[2];
      this.filled.push(position);
    }
  }
}

let menu = Menu({ width: 30, x: 1, y: 2 });
let difficulty = '';

menu.reset();
menu.write('ESCOLA A DIFICULDADE DO SUDOKU\n');
menu.write('------------------------------\n');

menu.add('Fácil');
menu.add('Médio');
menu.add('Difícil');

menu.on('select', function (label, index) {
  menu.close();

  if (index === 0) {
    difficulty = 'easy';
  } else if (index === 1) {
    difficulty = 'medium';
  } else {
    difficulty = 'hard';
  }

  new Sudoku(difficulty);
});

process.stdin.pipe(menu.createStream()).pipe(process.stdout);

process.stdin.setRawMode(true);
menu.on('close', function () {
  process.stdin.setRawMode(false);
  process.stdin.end();
});
