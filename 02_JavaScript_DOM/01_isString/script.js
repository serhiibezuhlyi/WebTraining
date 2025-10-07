function isString(obj){
    return String(obj) === obj;
}

const obj1 = {"123": 123};
const obj2 = 123;
const obj3 = "Yes";
const obj4 = true;
const obj5 = String(obj1) + obj2;


console.log(isString(obj1));
//false

console.log(isString(obj2));
//false

console.log(isString(obj3));
//true

console.log(isString(obj4));
//false

console.log(isString(obj5));
//true