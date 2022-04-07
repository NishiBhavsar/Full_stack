function add(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log("No Arguments: "+add()); 
console.log("2 Arguments: "+add(10, 20)); 
console.log("3 Arguments: "+add(10, 20, 30)); 
