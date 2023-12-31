'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

function initTests() {
  chai.use(chaiHttp);
  chai.use(require('chai-json-schema-ajv'));
  global.expect = chai.expect;
  global.request = chai.request;
};

module.exports = {
  initTests,
};
