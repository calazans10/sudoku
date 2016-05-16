'use strict';

class InvalidBoardError extends Error {
  constructor(message) {
    super();
    this.name = 'InvalidBoardError';
    this.message = message;
    this.stack = new Error().stack; // Optional
  }
}
