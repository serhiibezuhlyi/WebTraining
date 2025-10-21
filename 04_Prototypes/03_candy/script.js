function Candy(candyType, weight, volume) {
    this.candyType = candyType;
    this.weight = weight;
    this.volume = volume;
}

Candy.prototype.getSugar = function() {
    return 0;
};

Candy.prototype.toString = function() {
    return `${this.candyType} - (weight: ${this.weight}, sugar: ${this.getSugar()})`;
};


function Chocolate(weight, volume) {
    Candy.call(this, "chocolate", weight, volume);
}
Chocolate.prototype = Object.create(Candy.prototype);
Chocolate.prototype.constructor = Chocolate;
Chocolate.prototype.getSugar = function() {
    return this.volume * 0.9; 
};

function Caramel(weight, volume) {
    Candy.call(this, "caramel", weight, volume);
}
Caramel.prototype = Object.create(Candy.prototype);
Caramel.prototype.constructor = Caramel;
Caramel.prototype.getSugar = function() {
    return this.volume * 0.7;
};

function Jelly(weight, volume) {
    Candy.call(this, "jelly", weight, volume);
}
Jelly.prototype = Object.create(Candy.prototype);
Jelly.prototype.constructor = Jelly;
Jelly.prototype.getSugar = function() {
    return this.volume * 0.5; 
};

function Present() {
    this.candies = [];

    this.add = function(...candies) {
        this.candies.push(...candies);
    };

    this.getBySugar = function(min, max){
        return this.candies
            .filter((candy) => candy.getSugar() > min && candy.getSugar() < max);
    }

}

Present.prototype.toString = function(){
    return this.candies.map((candy) => candy.toString()).join('\n')
}


const present = new Present();
present.add(new Chocolate(3, 4), new Chocolate(1, 2), new Jelly(4, 2), new Caramel(1, 1));

console.log(present.toString())

console.log(present.getBySugar(1, 4))
