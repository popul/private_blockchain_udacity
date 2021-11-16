var chai = require("chai");
const SHA256 = require('crypto-js/sha256');

var expect = chai.expect;

describe("block", () => {
  it("should works", () => {
    expect(true).to.eql(true);
    console.log(SHA256('qsdkjqsl').toString())
  });
});
