console.log('hello world')
console.log('benmansour')

name = 'yassine benmansour'
console.log(name)
//operators
let x
x = 5
let y
y = 5
let z = x + y
console.log(z)



// user input
food = prompt("how much the food? ")
percentage = prompt("%?") / 100
amount = food * percentage
console.log(amount)



//function & arrow function

let func;
func = function add(a, b) {
  return a * b;
}
console.log(func(10, 10));


let hello;

hello = () => {
  return "hello world!";
}
hello1 = () => "hello world";

console.log(hello());

console.log(hello1());
