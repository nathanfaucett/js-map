var assert = require("assert"),
    map = require("../src/index");


describe("map", function() {
    it(
        "should create array/object with the results of calling the callback on every element in this array/object",
        function() {
            var array = [{
                    age: 42,
                    name: "Bob"
                }, {
                    age: 23,
                    name: "Frank"
                }],
                object = {
                    0: {
                        age: 42,
                        name: "Bob"
                    },
                    1: {
                        age: 23,
                        name: "Frank"
                    }
                };

            assert.deepEqual(
                map(array, function(value) {
                    return value.name;
                }), ["Bob", "Frank"]
            );

            assert.deepEqual(
                map(object, function(value) {
                    return value.name;
                }), {
                    0: "Bob",
                    1: "Frank"
                }
            );
        }
    );
});
