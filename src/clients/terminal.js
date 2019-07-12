#!/usr/bin/env node
'use strict';

const _ = require('lodash');
const chalk = require('chalk');
const readline = require('readline');
const Table = require('cli-table');
const Board = require('../board');

class Terminal {
  constructor() {
    this.board = null;
    this._filledPositions = [];
    this.displayMenu();
  }

  displayBoard() {
    let table = new Table();

    for (let line of this.board.lines) {
      line = line.positions.map(position => {
        let value = position.value || ' ';
        return _.some(this._filledPositions, position) ? chalk.green(value) : value;
      });
      table.push(line);
    }

    return table.toString();
  }

  displayMenu() {
    if (!this.board) {
      console.log(chalk.green('~*~*~*~*~*~*~*~ Welcome to Sudoku! ~*~*~*~*~*~*~*~'));
      this.actionHelp();
      return this.askDifficulty();
    }

    console.log(this.displayBoard());

    if (this.board.isResolved()) {
      this.displayMessage(chalk.green('Congrats! You have completed your sudoku'));
      process.exit(0);
    } else {
      this.askAction();
    }
  }

  displayMessage(output) {
    console.log(`> ${output}`);
  }

  askDifficulty() {
    let rl = readline.createInterface(process.stdin, process.stdout);
    let options = `${chalk.green('easy')} | ${chalk.yellow('normal')} | ${chalk.red('hard')}`;
    let difficulties = { 'easy': 10, 'normal': 30, 'hard': 50 };

    console.log(`Select a difficulty to start: [${options}]`);
    rl.setPrompt('> ');
    rl.prompt();

    rl.on('line', (line) => {
      this.board = Board.generate(difficulties[line.trim()] || difficulties['normal']);
      rl.close();
    }).on('close', () => {
      return this.displayMenu();
    }).on('SIGINT', () => {
      rl.pause();
    });
  }

  askAction() {
    let rl = readline.createInterface(process.stdin, process.stdout);

    rl.setPrompt('> ');
    rl.prompt();

    rl.on('line', (line) => {
      let data = line.trim();

      if (data === 'hint') {
        this.actionHint();
      } else if (data === 'help') {
        this.actionHelp();
      } else if (data.split(' ')[0] === 'delete') {
        this.actionDelete(data);
      } else if (data.split(' ').length === 3) {
        this.actionFill(data);
      } else {
        this.actionMissing();
      }

      rl.close();
    }).on('close', () => {
      return this.displayMenu();
    }).on('SIGINT', () => {
      rl.pause();
    });
  }

  actionMissing() {
    this.displayMessage(chalk.red('Try again, or enter \'help\' for instructions.'));
  }

  actionHint() {
    let nextMissing = this.board.nextMissing();

    if (!nextMissing) {
      this.displayMessage(chalk.yellow('No hints found'));
    } else {
      let position = _.find(this.board.positions, { 'x': nextMissing[0], 'y': nextMissing[1] });
      let message = `${position.x + 1} ${position.y + 1} ${position.availableNumbers()[0]}`;
      this.displayMessage(chalk.yellow(message));
    }
  }

  actionHelp() {
    this.displayMessage(`
    INSTRUCTIONS:

    * To insert a number in the board, enter the number
      and the coordinates of the chosen cell, in the
      following format: ${chalk.green('X Y Z')}, where:
        ${chalk.green('X')}: The number of row (from up to down).
        ${chalk.green('Y')}: The number of column (from left to right).
        ${chalk.green('Z')}: The number you wish to insert.

    * To delete a number, enter ${chalk.red('delete')} ${chalk.red('X Y')},
      where X Y are the coodinates of the number you wish to delete.

    * To get a hint, enter ${chalk.yellow('hint')}.
    `);
  }

  actionDelete(data) {
    let valueX = data.split(' ')[1] - 1;
    let valueY = data.split(' ')[2] - 1;
    let position = _.find(this.board.positions, { 'x': valueX, 'y': valueY });

    if (!position) {
      this.displayMessage(chalk.red('Violation found. The given position doesn\'t exist'));
    } else if (this.board.isProtectedPosition(valueX, valueY)) {
      this.displayMessage(chalk.red('Violation found. You can\'t delete this number'))
    } else {
      position.value = 0;
      this._filledPositions.pop(position);
    }
  }

  actionFill(data) {
    let values = data.split(' ').map(num => parseInt(num));
    let position = _.find(this.board.positions, { 'x': values[0] - 1, 'y': values[1] - 1 });

    if (!position) {
      this.displayMessage(chalk.red('Violation found. The given position doesn\'t exist'));
    } else if (this.board.isProtectedPosition(values[0] - 1, values[1] - 1)) {
      this.displayMessage(chalk.red('Violation found. You can\'t overwrite this number'));
    } else if (position.availableNumbers().indexOf(values[2]) === -1) {
      this.displayMessage(chalk.red(`Violation found. You can\'t use ${values[2]} there`));
    } else {
      position.value = values[2];
      this._filledPositions.push(position);
    }
  }
}

new Terminal();
