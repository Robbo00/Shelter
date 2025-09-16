let animals = ['bunny', 'cat', 'cow', 'dog', 'gecko', 'pig', 'rat', 'wolf']
import arrayShuffle from 'array-shuffle'
import arrayshuffle from 'array-shuffle'

class Animal{
    constructor(name, hunger, happiness, adopted){
        this.name = name
        this.hunger = hunger
        this.happiness = happiness
        this.adopted = adopted
        this.type = type
    }
    status(){
        console.log(this.name+ this.hunger+ this.happiness)
    }
}

class Farm extends Animal{
    constructor(name, hunger, happiness, adopted, animal){
        super()
        this.animal = animal
    }

    use(){
        if(this.animal == 'cow'){
            console.log('find some way to add to the food supply and feed all pets by 1')
        }
    }
}

class Domesticated extends Animal{
    constructor(name, hunger, happiness, adopted, animal){
        super()
    }
}

class Predator extends Animal{
    constructor(name, hunger, happiness, adopted, animal){
        super()
    }
    use(){
        if(this.animal == 'wolf'){
            // Find some way to have the wolf fill the portrait 
            console.log('find some way to make it so that attacks stop happening and occasionly the food supply get greatly increased')
        }
    }
}

class Vermin extends Animal{
        constructor(name, hunger, happiness, adopted, animal){
        super()
    }
    //Find way to mkae it so that it pops up in pet list and trys to take food from other pets you have to click the image when it pops up on the portrait you can click off
}

function getAnimals(mix){
console.log(mix)
console.log(arrayShuffle(mix))
}
getAnimals(animals)
// document.addEventListener(onload, getAnimals(animals))



//import array-shuffle
//Wolf: will occasionly fill a pets portrait and if it isnt cleared fast enough it takes the pet away if owned it wwards off all other wolves 
// Cow can feed all pets at the down side of food going down quicker and longer time for feed to refresh    
//Rat: Find way to make it so that this rat randomly pops up when it pops up 
//Cat: tbd
//Dog: tbd
//Gecko: tbd
//pig:tbd