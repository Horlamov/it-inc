let budget = 100;
let buildingName = "house";
let buildingCost = 70;


constructBuilding(buildingName, buildingCost);
constructBuilding("garage", 20);
constructBuilding("bethhouse", 15);

function constructBuilding(name, cost = 80) {
    if (cost <= budget) {
        console.log(`${name} completed!`);
        budget -= cost;
    } else {
        console.log(`For ${name} you don't have enough budget`);
    }

    console.log(`The rest is ${budget} after building`)

}

function getMoney(wallet, increment) {
    let income = wallet + increment
    return income;
}

budget = getMoney(budget, 20);

constructBuilding("bethhouse", 15);

console.log("budget", budget);
