'use strict';

const chai = require('chai');
const lint = require('./../../../src/rules/scripts-type').lint;

const should = chai.should();

describe('scripts-type Unit Tests', function() {
  context('when package.json has node with incorrect type', function() {
    it('LintIssue object should be returned', function() {
      const packageJsonData = {
        scripts: 'scripts'
      };
      const response = lint(packageJsonData, 'error');

      response.lintId.should.equal('scripts-type');
      response.lintType.should.equal('error');
      response.node.should.equal('scripts');
      response.lintMessage.should.equal('Type should be an Object');
    });
  });

  context('when package.json does not have node', function() {
    it('true should be returned', function() {
      const packageJsonData = {};
      const response = lint(packageJsonData, 'error');

      response.should.be.true;
    });
  });
});