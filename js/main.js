class My_monster {

    constructor(name, power, propert)
    {
        this.name    = name;
        this.power   = power;
        this.propert = propert;
        this.age     = 10;
    }

    use_power(name, power, propert) {
       console.log(`Монстер ${this.name} який має ${this.propert} 
        наносить удар з силою ${this.power}`)
       
    }
}

class Cat_monster extends My_monster {

      constructor() 
      {
         super();

      }    
      use_power(name, power, propert) {
        console.log("Привіт!!!!");
        this.__proto__.use_power(name, power, propert)

      }
     }

let iii = new Cat_monster("turtule", 234, "white");






