/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(arr1, arr2) {
    const result = [];
    if (result === false) {
        return result;
    } else {
    for (let i = 0; i < arr2.length; i++) {
        if (includesElement(arr1, arr2[i]) === true) {
            result.push(arr2[i]);
        }
        }
    }
    return result;
}

console.log(findCommonElements([1,2,2,3,4,4,5,7],[3,4,2,3,4,5,6,6,7]));
console.log(findCommonElements(['apple', 'banana', 'apple', 'orange', 'banana'], ['apple', 'pumpkin', 'apple']));
console.log(findCommonElements([1],[2]));

