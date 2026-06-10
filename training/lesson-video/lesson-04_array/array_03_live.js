const scores = [23, 56, 47, 30, 83, 98, 71, 92];
const scores2 = [45, 26, 89, 34, 87, 47, 30, 83];

function convertGrade(someScores){
    let newScores = [];
    for (let i = 0; i < someScores.length; i++) {
        if (someScores[i] >= 80){
            newScores.push(5);
        } else if (someScores[i] >= 50) {
            newScores.push(4);
        } else if (someScores[i] >= 30){
            newScores.push(3);
        } else {
            newScores.push(2);
        }
    }
    return newScores;
}
const convertedGrade = convertGrade(scores);
console.log(convertedGrade);