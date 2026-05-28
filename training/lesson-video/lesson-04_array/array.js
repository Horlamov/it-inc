function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const words1 = ["Мой кот", "Моя собака", "Мой попугай"];
const words2 = ["любит есть", "хочет погрызть", "всегда ищет"];
const words3 = ["морковку", "макароны", "косточку"];

function makePhrases(param1, param2, param3) {


    const result = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3);
    return result;
}

const result = makePhrases(words1, words2,words3);

console.log(result);