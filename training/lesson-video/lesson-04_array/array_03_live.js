const scores = [23, 56, 47, 30, 83, 98, 71, 92];
const scores2 = [45, 26, 89, 34, 87, 47, 30, 83];

function convertGrade(someScores){
    let newScores = [];
    for (let i = 0; i < someScores.length; i++) {
        let newGrade;
        const item = someScores[i]
        if (item >= 80){
            newGrade = 5;
        } else if (item >= 50) {
            newGrade = 4;
        } else if (item >= 30){
            newGrade = 3;
        } else {
            newGrade = 2;
        }
        newScores.push(newGrade);
    }
    return newScores;
}
const convertedGrade = convertGrade(scores);
console.log(convertedGrade);