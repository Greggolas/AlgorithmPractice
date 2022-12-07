const breadthFirstSearch = require("../lib/breadthFirstSearch");
const BinarySearchTree = require("../lib/binarySearchTree");

describe("breadthFirstSearch", () => {
    const bst = new BinarySearchTree()

    beforeAll(() => {
        bst.insert(10);
        bst.insert(99);
        bst.insert(3);
        bst.insert(17);
        bst.insert(2);
    });
    
    it("should return true when tree contains value", () => {
        expect(breadthFirstSearch(bst, 17)).toEqual(true);
    });

    it("should return false when tree does not contain value", () => {
        expect(breadthFirstSearch(bst, 123)).toEqual(false);
    });
});