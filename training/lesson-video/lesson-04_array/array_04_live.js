const superArray  = [23, 56, 47, 30, 83, 98, 71, 92];

function reverseArray(someArr) {
    const newArray = [];
    for (let i = someArr.length - 1; i >= 0; i--) {
        newArray.push(someArr[i]);
    }
    return newArray
}

const reversedArray = reverseArray(superArray);
console.log(reversedArray);

function removeElement(someArr, element) {
    const newArray = [];

    for (let i = 0; i < someArr.length; i++) {
        if (someArr[i] !== element) {
            newArray.push(someArr[i])
        }

    }
    return newArray
}


let filteredArray = removeElement(superArray,83)

console.log(filteredArray)