'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');

exports.mochaGlobalSetup = function() {
  chai.use(chaiHttp);
  chai.use(require('chai-json-schema-ajv'));
  global.expect = chai.expect;
  global.request = chai.request;
};
