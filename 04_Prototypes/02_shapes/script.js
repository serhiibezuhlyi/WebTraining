
function Shape(){}
Shape.prototype.area = function(){return 0}

function Elipse(a, b){
    this.a = a,
    this.b = b
}

Elipse.prototype = Object.create(Shape.prototype)
Elipse.prototype.constructor = Elipse
Elipse.prototype.area = function(){return Math.PI*this.a*this.b}

function Circle(r){
    this.r = r
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
Circle.prototype.area = function(){return Math.PI*this.r*this.r}

a = new Shape();
b = new Elipse(1, 2);
c = new Circle(5);

console.log(a.area());
console.log(b.area());
console.log(c.area());