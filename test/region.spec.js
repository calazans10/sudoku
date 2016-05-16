'use strict';

import Region from '../src/region.js';
import chai from 'chai';

let expect = chai.expect;

describe('Region', () => {
  describe('when instantiated', () => {
    it('should return an Object', () => {
      let region = new Region();
      expect(region).to.be.an('object');
    });
  });

  describe('#isValid', () => {
    it('should be a Function', () => {
      expect(Region.prototype.isValid).to.be.a('function');
    });
  });

  describe('#isCompleted', () => {
    it('should be a Function', () => {
      expect(Region.prototype.isCompleted).to.be.a('function');
    });
  });
});
