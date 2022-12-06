class BinaryTreeNode {
    /**
     * Node to store numbers in a BinaryTree
     * @param {number} val 
     */
    constructor(val) {
        this.val = val;
        /** @type {BinaryTreeNode | null} */
        this.left = null;
        /** @type {BinaryTreeNode | null} */
        this.right = null;
    }
}

module.exports = class BinarySearchTree {
    constructor() {
        this.head = null;
    }

    /**
     * number to insert into the tree
     * @param {number} val 
     */
    insert(val) {
        if (!this.head) {
            this.head = new BinaryTreeNode(val);
            return;
        }

        this.#traverseAndInsert(this.head, val);
    }

    /**
     * 
     * @param {BinaryTreeNode} node
     * @param {number} val 
     */
    #traverseAndInsert(node, val) {
        if (val < node.val) {
            if (!node.left) {
                node.left = new BinaryTreeNode(val);
                return;
            } else {
                this.#traverseAndInsert(node.left, val);
            }
        } else {
            if (!node.right) {
                node.right = new BinaryTreeNode(val);
                return;
            } else {
                this.#traverseAndInsert(node.right, val);
            }
        }
    }

    printInOrder() {
        if(this.head) {
            this.#traverseAndPrintInOrder(this.head);
        } else {
            console.log(null);
        }
    }

    /**
     * 
     * @param {BinaryTreeNode} node 
     */
    #traverseAndPrintInOrder(node) {
        node.left && this.#traverseAndPrintInOrder(node.left);
        console.log(node.val);
        node.right && this.#traverseAndPrintInOrder(node.right);
    }

    
    printPreOrder() {
        if (this.head) {
            this.#traverseAndPrintPreOrder(this.head);
        } else {
            console.log(null);
        }
    }

    /**
     * 
     * @param {BinaryTreeNode} node 
     */
    #traverseAndPrintPreOrder(node) {
        console.log(node.val);
        node.left && this.#traverseAndPrintPreOrder(node.left);
        node.right && this.#traverseAndPrintPreOrder(node.right);
    }

    printPostOrder() {
        if(this.head) {
            this.#traverseAndPrintPostOrder(this.head);
        } else {
            console.log(null);
        }
    }

    /**
     * 
     * @param {BinaryTreeNode} node 
     */
    #traverseAndPrintPostOrder(node) {
        node.left && this.#traverseAndPrintPostOrder(node.left);
        node.right && this.#traverseAndPrintPostOrder(node.right);
        console.log(node.val);
    }

}