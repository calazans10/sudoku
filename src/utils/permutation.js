'use strict';

function permutation(i, j) {
  let permutation = [];

  for (var k = 0; k <= i; k++) {
    for (var l = 0; l <= j; l++) {
      permutation.push([k, l]);
    }
  }

  return permutation;
}

module.exports = permutation;
