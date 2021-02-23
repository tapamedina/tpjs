class Hippopotamus {
    constructor(name, weight, tusksSize) {
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;    
    }

    swim = () => this.weight-= 0.3;

    eat = () => this.weight+= 1;
   
    fight = (Hippopotamus) => {
        if(this.tusksSize > Hippopotamus.tusksSize) return `The winner is ${this.name}`;
        if(this.tusksSize < Hippopotamus.tusksSize) return `The winner is ${Hippopotamus.name}`;
        return `There is no winner between ${this.name} and ${Hippopotamus.name}`;
    }

    toString = () => {
        return `name: ${this.name}, weight: ${this.weight} and tusksSize: ${this.tusksSize}`;
    }

    lifeCycle = () => {
        for(let i= 1; i< 16; i++) {
            this.eat();
            this.eat();
            this.swim();
            this.swim();
            this.swim();
        }
    }
    
};

//TEST
let donald = new Hippopotamus("Donald", 200, 50);
let gloria = new Hippopotamus("Gloria", 300, 60);
console.log(donald.toString());
console.log(gloria.toString());
console.log(donald.fight(gloria));
//LIFE CYCLE
let hippo = new Hippopotamus("Hippo", 350, 60);
for(i=1; i< 484; i++) {
    hippo.lifeCycle();
}
console.log(hippo.toString());