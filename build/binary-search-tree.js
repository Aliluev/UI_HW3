import { BinaryTreeNode } from "./binary-tree-node.js";
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = undefined;
    }
    // Добавление элемента в дерево
    BinarySearchTree.prototype.addKey = function (newNode, key) {
        if (newNode === undefined) {
            this.root = new BinaryTreeNode(key);
            return true;
        }
        if (key === newNode.key) {
            return false;
        }
        if (key < newNode.key) {
            if (newNode.leftNode !== undefined) {
                if (!this.addKey(newNode.leftNode, key)) {
                    return false;
                }
            }
            else {
                newNode.leftNode = new BinaryTreeNode(key);
                return true;
            }
        }
        else {
            if (newNode.rightNode !== undefined) {
                if (!this.addKey(newNode.rightNode, key)) {
                    return false;
                }
            }
            else {
                newNode.rightNode = new BinaryTreeNode(key);
                return true;
            }
        }
        return true;
    };
    BinarySearchTree.prototype.add = function (key) {
        return this.addKey(this.root, key);
    };
    // Поиск по значению
    BinarySearchTree.prototype.findKey = function (curNode, key) {
        if (curNode === undefined) {
            return undefined;
        }
        if (key === curNode.key) {
            return curNode;
        }
        if (key < curNode.key) {
            return this.findKey(curNode.leftNode, key);
        }
        return this.findKey(curNode.rightNode, key);
    };
    BinarySearchTree.prototype.find = function (key) {
        return this.findKey(this.root, key);
    };
    // Вспомогательный метод для удаления
    BinarySearchTree.prototype.minChild = function (curNode) {
        if (curNode.leftNode === undefined) {
            return curNode;
        }
        return this.minChild(curNode.leftNode);
    };
    // Удаление по значению
    BinarySearchTree.prototype.deleteKey = function (curNode, key) {
        if (curNode === undefined) {
            return undefined;
        }
        if (key < curNode.key) {
            curNode.leftNode = this.deleteKey(curNode.leftNode, key);
            return curNode;
        }
        if (key > curNode.key) {
            curNode.rightNode = this.deleteKey(curNode.rightNode, key);
            return curNode;
        }
        // Без потомков
        if (curNode.leftNode === undefined && curNode.rightNode === undefined) {
            curNode = undefined;
            return curNode;
        }
        // С одним потомком
        if (curNode.leftNode === undefined) {
            curNode = curNode.rightNode;
            return curNode;
        }
        if (curNode.rightNode === undefined) {
            curNode = curNode.leftNode;
            return curNode;
        }
        // С двумя потомками
        var temp = this.minChild(curNode.rightNode);
        curNode.key = temp.key;
        curNode.rightNode = this.deleteKey(curNode.rightNode, curNode.key);
        return curNode;
    };
    BinarySearchTree.prototype.delete = function (key) {
        this.root = this.deleteKey(this.root, key);
    };
    // Вывод всего дерева
    BinarySearchTree.prototype.printKey = function (curNode) {
        if (curNode === undefined) {
            return;
        }
        this.printKey(curNode.leftNode);
        console.log(curNode.key);
        this.printKey(curNode.rightNode);
    };
    BinarySearchTree.prototype.print = function () {
        this.printKey(this.root);
    };
    return BinarySearchTree;
}());
export { BinarySearchTree };
