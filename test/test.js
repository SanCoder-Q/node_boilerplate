var assert = require("assert");
var should = require("should");

var app = require("../lib/app");

describe("app.js", function(){
  describe("main()", function(){
    it("should output 'Hello World!' when input ['Hello', 'World!']", function(){
      app.main(["Hello", "World!"]).should.equal("Hello World!");
    });
  });
});
