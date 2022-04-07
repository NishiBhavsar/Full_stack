function addNumbers(a, b) {
    return a + b;
}
function addStrings(a, b) {
    return a + b;
}
function addNumbersOrStrings(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
function add(a, b) {
    return a + b;
}
function sum(a, b, c) {
    if (c)
        return a + b + c;
    return a + b;
}
console.log("Sum of 2 numbers: " + sum(10, 20));
console.log("Sum of 3 numbers: " + sum(10, 20, 30));
console.log("Sum of 2 numbers from user 3rd is optional: " + sum(10, 20));
var Sum = /** @class */ (function () {
    function Sum() {
        this.current = 0;
    }
    Sum.prototype.count = function (target) {
        if (target) {
            var values = [];
            for (var start = this.current; start <= target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current;
    };
    return Sum;
}());
var ob = new Sum();
console.log("Number: " + ob.count());
console.log("Array of number: " + ob.count(20));
