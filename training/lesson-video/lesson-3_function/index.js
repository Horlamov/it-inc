let budget = 100;
let buildingName = "house";
let buildingCost = 70;

if(buildingCost <= budget){
    console.log(`${buildingName} completed!`);
    budget -= buildingCost;
} else {
    console.log(`For ${buildingName} you don't have enough budget`);
}

console.log(`The rest is ${budget} after building house`)
