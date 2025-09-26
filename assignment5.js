let people = ["Greg", "Mary", "Devon", "James"];

for (let person of people){
    console.log(person);
}

people.shift();
console.log(people);

people.pop();
console.log(people);