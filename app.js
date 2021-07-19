function foo() {
    var b = "Can you access here?";
}
console.log(typeof b === "undefined");

try {
    throw new exception("fake exception");
} catch (err) {
    var test = "this is an error";
    console.log(err instanceof ReferenceError === true);
}
console.log(test === "this is an error");
console.log(typeof err === "undefined");