//Part One
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
      name: "Leo",
      type: "Cat",
      companion: {
          name: "Frank",
          type: "Flea",
          inventory: ["hat", "sunglasses"]
      }
  },
  roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
      }
}
  //to show each inventory
adventurer.inventory.forEach((each)=>
console.log(each));

console.log(`${adventurer.name}\n ${adventurer.health}`);
console.log(adventurer.roll());

//Part 2 Class Fantasy
class Character{
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = []
  };
    roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
  
}
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin)  //to check what's in Robin

//Part 3
class Character {
  static MAX_HEALTH = 100;
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`)
      }
}
class Adventurer extends Character{
  static ROLES = ["Fighter","Healer", "Wizard", "Screamer"];
  constructor (name, role, companion) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    this.companion= companion;
    if(Adventurer.ROLES.includes(this.role)===false){
      Adventurer.ROLES.push(this.role);
      console.log("the array doesn't contain this role"+this.role)
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  //override
  toString(){
      console.log(`name = ${this.name} , role = ${this.role}, companion =${this.companion.toString()}`);
      this.inventory.forEach((each)=>{
          console.log(each);
      })
  }
}
  class Companion extends Character{
      constructor(name, type) {
          super(name);
          this.type = type;
      }
      toString(){
        console.log(`${this.name} , ${this.type}`)
      }
  }
  
const robinCompanion = new Companion ("Leo", "cat")
const robin_ = new Adventurer("robin","climber", robinCompanion);
const anne = new Adventurer("Anne","coder");
const anneCompanion=new Companion("planty","plant");
console.log(robin_.toString());
console.log(Anne.toString());

//Part 4
//Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
Adventurer.ROLES.forEach(()=>{
console.log(each)
})

