const quickSort = require("../lib/quickSort");

describe("quickSort", () => {
    it("sorts from low to high", () => {
        expect(quickSort([5,4,2,1,4])).toEqual([1,2,4,4,5]);
    });
});