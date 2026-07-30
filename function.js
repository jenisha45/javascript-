// 1. Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet();

// 2. Function with Parameters
function welcome(name) {
    console.log("Welcome, " + name);
}
welcome("Alice");

// 3. Function with Return Value
function add(a, b) {
    return a + b;
}
console.log("Sum:", add(10, 20));

// 4. Function Expression
const multiply = function(a, b) {
    return a * b;
};
console.log("Multiply:", multiply(5, 4));

// 5. Arrow Function
const square = (num) => num * num;
console.log("Square:", square(6));

// 6. Default Parameter Function
function sayHello(name = "Guest") {
    console.log("Hello, " + name);
}
sayHello();
sayHello("John");

// 7. Anonymous Function (inside setTimeout)
setTimeout(function() {
    console.log("This runs after 2 seconds.");
}, 2000);

// 8. Callback Function
function calculate(a, b, operation) {
    return operation(a, b);
}

const result = calculate(8, 2, function(x, y) {
    return x - y;
});

console.log("Callback Result:", result);
