// Початкові дані
let a = -2.004;
let b = 0.87;

// Обчислення x і y
let x = Math.pow(a * a + b * b, 4.1);
let y = Math.pow(Math.atan(1 / b), 3);

// Обчислення p
let numerator = Math.exp(-x * y) + 17.4;
let denominator = Math.cbrt(Math.pow(Math.sin(x * y), 2));
let p = numerator / denominator;

// Вивід результатів
console.log("x =", x);
console.log("y =", y);
console.log("p =", p);
