// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    if (a >= b && a >= c) {
       return console.log(a)

    } else if (b >= a && b >= c) {
       return console.log(b)
    } else if (c >= a && c >= b) {
        return console.log(c)
    }
    return findLargest;
}


findLargest(2, 3, 2);