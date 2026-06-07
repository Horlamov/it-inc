const array = [23, 56, 47, 30, 83, 98, 73];

function getAverage(someArr) {
    let sum = 0;
    for (let i = 0; i < someArr.length; i++) {
        sum += someArr[i];
    }
    return Math.round(sum / someArr.length);
}

const average = getAverage(array);

console.log(average);