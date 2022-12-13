const { BinarySearchTree } = require("../lib/binarySearchTree");

const consoleSpy = jest.spyOn(console, "log").mockImplementation();

/** @type {BinarySearchTree} */
let bst;

describe("BinarySearchTree", () => {

    beforeAll(() => {
        /**
         *      10
         *   4       18
         *     7   15  18
         */

        bst = new BinarySearchTree();
        bst.insert(10);
        bst.insert(4);
        bst.insert(7);
        bst.insert(18);
        bst.insert(15);
        bst.insert(18);
    });

    beforeEach(jest.clearAllMocks);
    
    it("inserts into the next avaialble location", () => {
        // head
        expect(bst.head.val).toEqual(10);

        // left side
        expect(bst.head.left.val).toEqual(4);
        expect(bst.head.left.right.val).toEqual(7);

        // right side
        expect(bst.head.right.val).toEqual(18);
        expect(bst.head.right.left.val).toEqual(15);
        expect(bst.head.right.right.val).toEqual(18);
    });

    it("prints tree in pre-order", () => {
        bst.printPreOrder();
        
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 10);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 4);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 7);
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 18);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 15);
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 18);
    });

    it("prints tree in order", () => {
        bst.printInOrder();

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 4);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 7);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 10);
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 15);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 18);
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 18);
    });

    it("prints tree in post-order", () => {
        bst.printPostOrder();

        expect(consoleSpy).toHaveBeenNthCalledWith(1, 7);
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 4);
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 15);
        expect(consoleSpy).toHaveBeenNthCalledWith(4, 18);
        expect(consoleSpy).toHaveBeenNthCalledWith(5, 18);
        expect(consoleSpy).toHaveBeenNthCalledWith(6, 10);
    });
});