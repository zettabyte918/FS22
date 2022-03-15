let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
