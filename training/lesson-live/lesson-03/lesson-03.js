let budget = 100;



console.log("budget: ", budget)

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

