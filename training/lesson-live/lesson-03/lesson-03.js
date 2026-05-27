let budget = 100;


function constructBuilding(name, cost) {
    if(budget >= cost) {
        budget -= cost;
        console.log(`${name} complete!`);
    } else {
        console.log(`For ${name} you don't have enough budget`);
    }
}

constructBuilding("garage", 35);
constructBuilding("house", 75);
constructBuilding("sauna", 10);

function increaseBudget(totalBudget, salary){
    return totalBudget += salary;
}

budget = increaseBudget(budget, 1000)

console.log("budget: ", budget);
