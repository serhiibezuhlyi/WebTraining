Object.prototype.size = function() {
    return Object.keys(this).filter((key) => typeof this[key] != 'function').length
}


testCase1 = {
    its: 'Will',
    be: "size",
    three: "!"
}

testCase2 = {
    skip: function(){console.log('haha')},
    this: "will be"
}

testCase3 = {
    zero: () => {console.log("empty")}
}

console.log(testCase1.size())
console.log(testCase2.size())
console.log(testCase3.size())

