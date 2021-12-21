// #1: Create a `Gladiator` class that has the following properties...
// - a `name`
// - a `weapon` (one of Spear, Club, Trident)
class Gladiator {
  // Type your solution immediately below this line:
  constructor(name,weapon) {
    const weapons = ['Spear', 'Club', 'Trident']
    this.name = name
    if (weapons.includes(weapon)){
      this.weapon = weapon
    }
    else{
      console.log("Error!! Please enter 'Spear', 'Club', or 'Trident'")
    }
  }
}
const max1 = new Gladiator("Maximus", "Trident");
console.log(max1.name); // "Maximus"
console.log(max1.weapon); // "Trident"



// #2: Create an instance of the Gladiator class with a name argument of "Maximus" and a weapon of "Trident," and assign it to a variable called `max`.
// Type your solution immediately below this line:
const max = null;

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (!this.window && typeof Gladiator !== "undefined") {
  module.exports = {
    Gladiator,
    max,
  };
}
