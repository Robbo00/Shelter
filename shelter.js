class Pet {
    constructor(name) {
        this.name = name;
        this.hunger = 5;
        this.happy = 5;
        this.adopted = false;
    }

    feed() {
        this.hunger = Math.max(0, this.hunger - 2);
        return this.name + " was fed!";
    }

    play() {
        this.happy = Math.min(10, this.happy + 2);
        this.hunger = Math.min(10, this.hunger + 1);
        return this.name + " had fun!";
    }

    adopt() {
        this.adopted = true;
        return "You adopted " + this.name + "!";
    }

    status() {
        return this.name + " - Hunger: " + this.hunger + ", Happy: " + this.happy;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    play() {
        this.happy = Math.min(10, this.happy + 3);
        this.hunger = Math.min(10, this.hunger + 1);
        return this.name + " loves fetch!";
    }

    bark() {
        return this.name + " says Woof!";
    }
}

class Cat extends Pet {
    constructor(name, likesBoxes) {
        super(name);
        this.boxes = likesBoxes;
    }

    play() {
        this.happy = Math.min(10, this.happy + 1);
        this.hunger = Math.min(10, this.hunger + 0.5);
        return this.name + " plays with string!";
    }

    purr() {
        return this.name + " says Purr!";
    }
}

let shelter = [];

function menu() {
    let choice = prompt("1) Adopt 2) Feed 3) Play 4) Status 5) Remove 0) Exit");
    
    if (choice == "1") {
        adopt();
    } else if (choice == "2") {
        feedPet();
    } else if (choice == "3") {
        playPet();
    } else if (choice == "4") {
        showStatus();
    } else if (choice == "5") {
        removePet();
    } else if (choice == "0") {
        alert("Bye!");
    }
}

function adopt() {
    let type = prompt("1) Dog 2) Cat");
    let name = prompt("Pet name?");
    
    if (type == "1") {
        let breed = prompt("Breed?") || "Mixed";
        let dog = new Dog(name, breed);
        shelter.push(dog);
        alert(dog.adopt());
    } else if (type == "2") {
        let boxes = confirm("Likes boxes?");
        let cat = new Cat(name, boxes);
        shelter.push(cat);
        alert(cat.adopt());
    }
    
    refresh();
}

function feedPet() {
    if (shelter.length == 0) {
        alert("No pets!");
        return;
    }
    
    let list = "";
    for (let i = 0; i < shelter.length; i++) {
        list += (i + 1) + ") " + shelter[i].name + "\n";
    }
    
    let choice = prompt("Feed which pet?\n" + list);
    let index = parseInt(choice) - 1;
    
    if (index >= 0 && index < shelter.length) {
        alert(shelter[index].feed());
        refresh();
    }
}

function playPet() {
    if (shelter.length == 0) {
        alert("No pets!");
        return;
    }
    
    let list = "";
    for (let i = 0; i < shelter.length; i++) {
        list += (i + 1) + ") " + shelter[i].name + "\n";
    }
    
    let choice = prompt("Play with which pet?\n" + list);
    let index = parseInt(choice) - 1;
    
    if (index >= 0 && index < shelter.length) {
        alert(shelter[index].play());
        refresh();
    }
}

function showStatus() {
    if (shelter.length == 0) {
        alert("No pets!");
        return;
    }
    
    let status = "";
    for (let i = 0; i < shelter.length; i++) {
        status += shelter[i].status() + "\n";
    }
    alert(status);
}

function removePet() {
    if (shelter.length == 0) {
        alert("No pets!");
        return;
    }
    
    let list = "";
    for (let i = 0; i < shelter.length; i++) {
        list += (i + 1) + ") " + shelter[i].name + "\n";
    }
    
    let choice = prompt("Remove which pet?\n" + list);
    let index = parseInt(choice) - 1;
    
    if (index >= 0 && index < shelter.length) {
        let pet = shelter[index];
        shelter.splice(index, 1);
        alert(pet.name + " was released!");
        refresh();
    }
}

function refresh() {
    let div = document.getElementById("pets");
    div.innerHTML = "";
    
    for (let i = 0; i < shelter.length; i++) {
        let pet = shelter[i];
        let petDiv = document.createElement("div");
        petDiv.className = "pet";
        
        let info = pet.name;
        if (pet instanceof Dog) {
            info += " (Dog - " + pet.breed + ")";
        } else if (pet instanceof Cat) {
            info += " (Cat)";
        }
        info += " - Hunger: " + pet.hunger + ", Happy: " + pet.happy;
        
        petDiv.textContent = info;
        
        let feedBtn = document.createElement("button");
        feedBtn.textContent = "Feed";
        feedBtn.onclick = function() {
            alert(pet.feed());
            refresh();
        };
        
        let playBtn = document.createElement("button");
        playBtn.textContent = "Play";
        playBtn.onclick = function() {
            alert(pet.play());
            refresh();
        };
        
        let specialBtn = document.createElement("button");
        if (pet instanceof Dog) {
            specialBtn.textContent = "Bark";
            specialBtn.onclick = function() {
                alert(pet.bark());
            };
        } else if (pet instanceof Cat) {
            specialBtn.textContent = "Purr";
            specialBtn.onclick = function() {
                alert(pet.purr());
            };
        }
        
        petDiv.appendChild(feedBtn);
        petDiv.appendChild(playBtn);
        if (pet instanceof Dog || pet instanceof Cat) {
            petDiv.appendChild(specialBtn);
        }
        
        div.appendChild(petDiv);
    }
    
    document.getElementById("total").textContent = shelter.length;
    
    let adoptedCount = 0;
    for (let i = 0; i < shelter.length; i++) {
        if (shelter[i].adopted) {
            adoptedCount++;
        }
    }
    document.getElementById("adopted").textContent = adoptedCount;
}

