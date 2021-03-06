"use strict";
const assert = require("power-assert");
describe("Promise Test", () => {
    it("should return a promise object", () => {
        const promise = Promise.resolve(42);
        return promise.then((value) => {
            assert(value === 42);
        });
    });
});
