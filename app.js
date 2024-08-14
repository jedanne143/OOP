
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

  class Adventurer extends Character{
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
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
        console.log(`name = ${this.name} , role = ${this.role}`);
        this.inventory.forEach((each)=>{
            console.log(each);
        })
    }
  }
    class Companion extends Character{
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
    }
const robin_ = new Adventurer("robin","climber");
const Anne = new Adventurer("Anne","coder");
console.log(robin_.toString());
console.log(Anne.toString());




