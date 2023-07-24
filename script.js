let nameArray = [
'Lyla',
'Ivy',
"Flynn",
'schnitzel von Krumm, with a very low tum',
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