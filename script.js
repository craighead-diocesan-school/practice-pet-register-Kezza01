let nameArray = [
{name:'Lyla',age : 2, species :'rat'},
{name:'Ivy',age : 1, species :'dog'},
{name:'Flynn',age : 11, species :'dog'},
{name:'schnitzel von Krumm, with a very low tum',age: 69, species:'hotdog'},
]

function addName() {
//lets user input the name of the pet
let name=prompt("what is the name of your pet?")
// add a new name to add to array of names
 nameArray.push(name)
}

function names(){
//lets shows user names of all the pets
alert(nameArray)
}