let people = ["Greg", "Mary", "Devon", "James"];

for (let person of people){
    console.log(person);
}

people.shift();
console.log(people);

people.pop();
console.log(people);

people.unshift("Matt");
console.log(people);

people.push("Owen");
console.log(people);

let newPeople = people.slice(2);
console.log(newPeople);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));