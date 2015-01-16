var assert = require("assert"),
    map = require("../src/index");


describe("map", function() {
    it("should loop over array or object and returns array of callbacks functions", function() {
        var array = [{
                age: 42,
                name: "Bob"
            }, {
                age: 23,
                name: "Frank"
            }],
            results;

        results = map(array, function(value) {
            return value.name;
        });

        assert.deepEqual(results, ["Bob", "Frank"]);
    });
});
