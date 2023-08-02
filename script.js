let pets = [
{name:'Lyla',age : 2, species :'rat'},
{name:'Ivy',age : 1, species :'dog'},
{name:'Flynn',age : 11, species :'dog'},
{name:'schnitzel von Krumm, with a very low tum',age: 69, species:'hotdog'},
]

function showPets() {
 for (let pet of pets) {
    alert(pet.name)
 }
}



function addPet() {
//lets user input the name of the pet
let name=prompt("what is the name of your pet?")
let age= prompt("what is the age of " + name + "?")
let species = prompt("What species is " + name + "?")
// make an object called 'pet' from the details got
let pet = {
    name: name,
    age: age,
    species: species
}
//push the pet object onto the pets array
pets.push(pet)
}
