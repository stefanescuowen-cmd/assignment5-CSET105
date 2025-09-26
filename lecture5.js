const prompt = require ("prompt-sync")();


// #1

    // const arr1 = [1, 2, 3];
    // const arr2 = [];

    // for (let i = 0; i<arr1.length; i++){
    //     arr2.push(arr1[i] * 2);
    // }

    // // prints [2, 4, 6]
    // console.log(arr2);
    

// #2

    // function doubleItem(item){
    //     return item * 2;
    // }

    // const arr1 = [1, 2, 3];
    // const arr2 = arr1.map(doubleItem);
    // console.log(arr2);

// _____________________________________

    // const arr1 = [1, 2, 3];
    // const arr2 = arr1.map(function(item){
    //     return item * 2;
    // });
    // console.log(arr2)

// _____________________________________

    // const arr1 = [1, 2, 3];
    // const arr2 = arr1.map(item => item * 2);
    // console.log(arr2);


// #3

    // const birthYear = [1975, 1997, 2002, 1995, 1985];
    // const ages = [];

    // for(let i = 0; i < birthYear.length; i++){
    //     let age = 2018 - birthYear[i];
    //     ages.push(age);
    // }

    // //prints [43, 21, 16, 23, 33]
    // console.log(ages);

// _____________________________________

    // const birthYear = [1975, 1997, 2002, 1995, 1985];
    // const ages = birthYear.map (year => 2018 - year);

    // //prints [43, 21, 16, 23, 33]
    // console.log(ages);


// #4

    // const persons = [
    //     {name: 'Peter', age: 16},
    //     {name: 'Mark', age: 18},
    //     {name: 'John', age: 27},
    //     {name: 'Jane', age: 14},
    //     {name: 'Tony', age: 24},

    // ];

    // const fullAge = [];

    // for(let i = 0; i < persons.length; i++){
    //     if(persons[i].age >= 18){
    //         fullAge.push(persons[i]);
    //     }
    // }

    // console.log(fullAge);

// _____________________________________

    // const persons = [
    //     {name: 'Peter', age: 16},
    //     {name: 'Mark', age: 18},
    //     {name: 'John', age: 27},
    //     {name: 'Jane', age: 14},
    //     {name: 'Tony', age: 24},
    // ];

    // const fullAge = persons.filter(person => person.age >= 18);
    // console.log(fullAge);

    
// _____________________________________


// #5

    // const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

    // function mapForEach(arr, fn){
        
    //     const newArray = [];
    //     for(let i = 0; i < arr.length; i++){
    //         newArray.push(
    //             fn(arr[i])
    //         );
    //     }
    //     return newArray;
    // }   
    // const lenArray = mapForEach(strArray, function(item){
    //     return item.length;
    // });

    // //prints [10, 6, 3, 4, 1]
    // console.log(lenArray);


// #6

    // map()

    // const arr = [1, 2, 3, 4, 5, 6];
    //     const mapped = arr.map(element => element + 30);
    //     console.log(mapped); //[ 31, 32, 33, 34, 35, 36 ]


    // filter()

    // const arr = [1, 2, 3, 4, 5, 6];
    //     const filtered = arr.filter(element => element === 2 || element ===4);
    //     console.log(filtered); //[ 2, 4 ]

    
    // sort()

    // const arr = [1, 2, 3, 4, 5, 6];
    // const alphabet = ["f", "a", "c", "v", "z"];

    //     // sort in descending order
    //     decend = arr.sort((a, b) => a > b ? -1 : 1);
    //     console.log(decend); //[ 6, 5, 4, 3, 2, 1 ]

    //     // sort in ascending order
    //     ascend = alphabet.sort((a, b) => a > b ? 1 : -1);
    //     console.log(ascend); //[ 'a', 'c', 'f', 'v', 'z' ]

// _____________________________________

    // let num = [1, 9, 2, 7, 10]
    // console.log(num.sort((a,b)=>a-b)) //[ 1, 2, 7, 9, 10 ]

    // let num = [1, 9, 2, 7, 10]
    // console.log(num.sort((a,b)=>b-a)) //[ 10, 9, 7, 2, 1 ]



    // forEach()

    // const arr = [1, 2, 3];
    // arr.forEach(element =>{
    //     console.log(element);
    // });
    // //1
    // //2
    // //3


    // concat()

    // const arr1 = ["a", "b", "c"]
    // const arr2 = ["d", "e", "f"]

    // console.log(arr1.concat(arr2)); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
    // console.log(arr1) //[ 'a', 'b', 'c' ]
    // console.log(arr2) //[ 'd', 'e', 'f' ]


    // every()

    // // all elements are greater than 5
    // const greaterFive = Array.every(num => num > 5);
    // console.log(greaterFive); //false

    // // all elements are less than 9
    // const lessnine = arr.every(num => num < 9);
    // console.log(lessnine); //true