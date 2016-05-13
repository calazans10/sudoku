'use strict';

function arrayIntersection(arr1, arr2) {
  return arr1
    .filter(value => arr2.indexOf(value) === -1)
    .concat(arr2.filter(value => arr1.indexOf(value) === -1));
}

export default arrayIntersection;
