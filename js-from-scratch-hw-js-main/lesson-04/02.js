/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно,
она доступна по всему проекту за счёт hoisting.
*/
//
import { includesElement } from './01.js'

function findUniqueElements(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {

        if (includesElement(result, arr[i]) === false ) {

            result.push(arr[i])
        }
    }
    return result;
}


console.log(findUniqueElements([1,2,2,3,4,4,5]));
console.log(findUniqueElements(['apple', 'banana', 'apple', 'orange', 'banana']));
console.log(findUniqueElements([true, false, true, false]));
console.log(findUniqueElements([]));

