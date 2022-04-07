function add(a, b, c) {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
}
console.log(add(5, 7, 9));
console.log(add(3, 7));
