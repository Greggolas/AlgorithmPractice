const { BinarySearchTree } = require("../lib/binarySearchTree");
const treesAreEqual = require("../lib/compareBinaryTrees");

/**
 * @param {BinarySearchTree} bst 
 */
const setToBaseBst = (bst) => {
    bst.insert(10);
    bst.insert(100);
    bst.insert(33);
    bst.insert(0);
    bst.insert(51);
    bst.insert(25);
};

describe("treesAreEqual", () => {
    const baseBst = new BinarySearchTree();
    const equalBst = new BinarySearchTree();
    const unequalBst = new BinarySearchTree();

    beforeAll(() => {
        setToBaseBst(baseBst);
        setToBaseBst(equalBst);

        unequalBst.insert(77);
        unequalBst.insert(34);
    });
    
    it("returns false if not equal", () => {
        expect(treesAreEqual(baseBst, unequalBst)).toEqual(false);
    });

    it("returns true if equal", () => {
        expect(treesAreEqual(baseBst, equalBst)).toEqual(true);
    });
});