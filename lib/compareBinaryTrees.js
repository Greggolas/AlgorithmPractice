const {
    BinarySearchTree,
    BinaryTreeNode
} = require("./binarySearchTree");

/**
 * @param {BinaryTreeNode | null} a 
 * @param {BinaryTreeNode | null} b 
 */
const compare = (a, b) => {
    if (a === null && b === null) return true;

    if (a === null || b === null) return false;

    if (a.val !== b.val) return false;

    return compare(a.left, b.left) && compare(a.right, b.right);
}


/**
 * @param {BinarySearchTree} a 
 * @param {BinarySearchTree} b 
 * @returns {boolean}
 */
module.exports = function treesAreEqual(a, b) {
    return compare(a.head, b.head);
}