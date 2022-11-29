const bubbleSort = require("../lib/bubbleSort");

describe("bubbleSort", () => {
    it("sorts ints from low to high", () => {
        expect(bubbleSort([5,4,2,1,4])).toEqual([1,2,4,4,5]);
    });
});
