let users = [
  { name: "Amit", age: 22 },
  { name: "Rahul", age: 18 },
  { name: "Sneha", age: 25 }
];

let result = users.filter(user => user.age > 20);

console.log(result);