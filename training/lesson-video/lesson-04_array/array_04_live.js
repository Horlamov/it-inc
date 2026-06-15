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