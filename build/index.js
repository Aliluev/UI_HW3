import * as readlineSync from "readline-sync";
import { BinarySearchTree } from "./binary-search-tree.js";
function main() {
    var bst = new BinarySearchTree();
    console.log("Изначально дерево : 6, 11, -2, 3, -1");
    bst.add(6);
    bst.add(11);
    bst.add(-2);
    bst.add(3);
    bst.add(-1);
    var i = 0;
    while (i === 0) {
        console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n" +
            "Выберете действие с бинарным деревом поиска:\n" +
            "1) Добавить элемент в дерево;\n2) Найти элемент в дереве;\n" +
            "3) Удалить элемент по значению;\n4) Вывести все дерево;\n5) Выход.\n" +
            "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        var userChoice = readlineSync.question("");
        switch (userChoice) {
            case "1":
                var insert = readlineSync.question("Key to insert = ");
                var bol = bst.add(+insert);
                if (!bol) {
                    console.log("Такой ключ уже есть, вставка невозможна!");
                }
                break;
            case "2":
                var f = readlineSync.question("Key to find = ");
                var temp = bst.find(+f);
                if (temp === undefined) {
                    console.log("Такого элемента в дереве нет");
                }
                else {
                    console.log("Найдено значение " + temp.key);
                }
                break;
            case "3":
                var del = readlineSync.question("Key to delete = ");
                bst.delete(+del);
                break;
            case "4":
                console.log("");
                bst.print();
                break;
            case "5":
                i++;
                break;
            default:
                console.log("Введено некорректное значение");
        }
    }
}
main();
