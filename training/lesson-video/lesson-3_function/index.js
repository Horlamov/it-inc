let budget = 100;
let buildingName = "house";
let buildingCost = 70;



function constructBuilding(name, cost) {
    if (cost <= budget) {
        console.log(`${name} completed!`);
        budget -= cost;
    } else {
        console.log(`For ${name} you don't have enough budget`);
    }

    console.log(`The rest is ${budget} after building house`)

}

constructBuilding(buildingName, buildingCost);