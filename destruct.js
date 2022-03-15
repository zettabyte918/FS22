const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); //undefined

const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

let obj = {
  name: "javascript",
  lastname: "language",
};

const { names, lastname } = obj;
+console.log(names); // javascript
console.log(lastname); // language
