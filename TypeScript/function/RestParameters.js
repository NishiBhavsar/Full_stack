function add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("No Arguments: " + add());
console.log("2 Arguments: " + add(10, 20));
console.log("3 Arguments: " + add(10, 20, 30));
