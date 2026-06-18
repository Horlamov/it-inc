const pet = {
    name: "Vasya",
    type: "cat",
    voice: "meeeow",
    hunger: 20,
    happiness: 50
}


const superPet = {
    name: "Vasya",
    type: "cat",
    voice: "meeeow",
    hunger: 20,
    happiness: 50,
    checkStatus: function () {
        console.log(`Счастье: ${superPet.happiness}, голод: ${superPet.hunger}`)
    },

    sayHi: function() {
        if(superPet.hunger > 50) {
            console.log("Покорми меня!");
        } else if (superPet.happiness < 50){
            console.log("Давай играть!! ");
        } else {
            console.log(superPet.voice)
        }
    },

    feedPet(food){
        let foodQuantity = 0;
        if(food === "meet") {
            foodQuantity = 20
        } else if (food === "fish") {
            foodQuantity = 10
        } else {
            console.log(`Я это не ем, ${ superPet.voice}` );
            return
        }
        superPet.hunger = superPet.hunger - foodQuantity
        if (superPet.hunger < 0) {
            superPet.hunger = 0
        }
        superPet.checkStatus()
    },
    playWithPet(time) {
        superPet.happiness = superPet.happiness + (time * 10)
        if(superPet.happiness > 100) {
            superPet.happiness = 100
        }
        superPet.hunger = superPet.hunger + (time * 5)
        if (superPet.hunger > 100) {
            superPet.hunger = 100
        }
        superPet.checkStatus()
    }

}

superPet.feedPet("meet")
superPet.playWithPet(10)



superPet.sayHi()
// superPet.checkStatus()
// console.log(superPet.happiness);
// console.log(superPet.hunger);