const BinarySearchTree = require("./binarySearchTree");

/**
 * 
 * @param {BinarySearchTree} tree 
 * @param {number} val 
 */
module.exports = function breadthFirstSearch(tree, val) {
    const queue = [tree.head];

    while (queue.length) {
        const curr = queue.shift();

        if (curr) {
            if (curr.val === val) {
                return true;
            }

            curr.left && queue.push(curr.left);
            curr.right && queue.push(curr.right);
        }
    }

    return false;
}