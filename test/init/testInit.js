'use strict'

const chai = require('chai')
    , chaiHttp = require('chai-http');

function initTests() {
    chai.use(chaiHttp);
    global.expect = chai.expect;
    global.request = chai.request;
};

module.exports = {
    initTests,
}