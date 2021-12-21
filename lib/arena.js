// #1: Create an Arena class with the following criteria:
// -- a 'name' that is first-initial capitalized, even if input is not
// Examples:
// const megalopolis = new Arena("megalopolis");
// console.log(megalopolis.name); // => Megalopolis

// -- a 'gladiators' property that is initialized as an empty array

// -- an 'addGladiator' method that adds gladiators to the 'gladiators' array, and never allows more than 2 gladiators at a time
// Examples:
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Sword");
// const andronicus = new Gladiator("Andronicus", "Sword");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.addGladiator(andronicus);
// console.log(colosseum.gladiators.length); // => 2

// -- a "fight" method that results in the elimination of one of the gladiators in the arena with the following winning conditions:
// Winning conditions
// - Trident beats Spear
// - Spear beats Club
// - Club beats Trident
// - If the two gladiators have the same weapon, they are both eliminated.
// Examples:
// const max = new Gladiator("Maximus", "Trident");
// const titus = new Gladiator("Titus", "Spear");
// const colosseum = new Arena("Colosseum");
// colosseum.addGladiator(max);
// colosseum.addGladiator(titus);
// colosseum.fight();
// console.log(colosseum.gladiators); // => [max]

class Arena {
  // Type your solution immediately below this line:
  constructor(name, gladiators){
    this.name = name[0].toUpperCase()+ name.substring(1)
    this.gladiators = []
  }
  addGladiator(gladiator){
    if (this.gladiators.length < 2){
      this.gladiators.push(gladiator)
    }
    else{
      console.log('No more than two Gladiators')
    }
  }
  fight(){
    if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon === 'Spear' || this.gladiators[0].weapon === 'Spear' && this.gladiators[1].weapon === 'Club' || this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon === 'Trident'){
      this.gladiators.shift();
      return `${this.gladiators[0].name} WON!`;

    }
    else if(this.gladiators[1].weapon === 'Trident' && this.gladiators[0].weapon === 'Spear' || this.gladiators[1].weapon === 'Spear' && this.gladiators[0].weapon === 'Club' || this.gladiators[1].weapon === 'Club' && this.gladiators[0].weapon === 'Trident'){
      this.gladiators.pop();
      return `${this.gladiators[1].name} WON!`;
    }
    else {
      this.gladiators.splice(0,2)
      return 'Both are eliminated from the ARENA!!'
    }
  }
}
const colosseum1 = new Arena("Colosseum");
console.log(colosseum1.name); // => Colosseum
const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis

const colosseum2 = new Arena("Colosseum");
console.log(colosseum2.gladiators); // => []
const max2 = new Gladiator("Maximus", "Trident");
const colosseum3 = new Arena("Colosseum");
colosseum3.addGladiator(max2);
console.log(colosseum3.gladiators); // => [Gladiator]

const max3 = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum4 = new Arena("Colosseum");
colosseum4.addGladiator(max3);
colosseum4.addGladiator(titus);
colosseum4.addGladiator(andronicus);
console.log(colosseum4.gladiators.length); // => 2

const max4 = new Gladiator("Maximus", "Trident");
const titus2 = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max4);
colosseum.addGladiator(titus2);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]

// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if (!this.window && typeof Arena !== "undefined") {
  module.exports = {
    Arena,
  };
}
