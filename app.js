function outer() {
    let count = 0;
    let inner = function() {
        return ++count;
    };
    return inner;
}
let increase = outer();

console.log(increase());
console.log(increase);
console.log(outer());