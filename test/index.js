var tape = require("tape"),
    map = require("..");


tape("map(array, callback[, thisArg]) creates a new object with the results of calling a provided function on every element in this object", function(assert) {
    assert.deepEquals(
        map({
            a: "a",
            b: "b",
            c: "c"
        }, function(value, key) {
            return value + key;
        }), {
            a: "aa",
            b: "bb",
            c: "cc"
        }
    );
    assert.deepEquals(
        map([0, 1, 2, 3, 4], function(value, index) {
            return value + index;
        }), [0, 2, 4, 6, 8]
    );
    assert.end();
});
