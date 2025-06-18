//array
const arr = ["apple", "banana", "cherry"];
console.log(arr); // [ 'apple', 'banana', 'cherry' ]

const [a, b, c] = arr;
console.log(b, c); // 'banana', 'cherry'

// Array methods
arr.push("grape");
console.log(arr); // [ 'apple', 'banana', 'cherry', 'grape' ]

arr.pop();
console.log(arr); // [ 'apple', 'banana', 'cherry' ]

arr.shift(); // removes 'apple'
arr.unshift("orange"); // adds 'orange' to front
console.log(arr); // [ 'orange', 'banana', 'cherry' ]

arr.splice(1, 1, "kiwi", "lichi"); // replace 'banana' with 'kiwi' and 'lichi'
console.log(arr); // [ 'orange', 'kiwi', 'lichi', 'cherry' ]

// Searching inside object array
const arr1 = [
    {name: "Raj", city: "Delhi"},
    {name: "Nithin", city: "Vizag"},
    {name: "Sara", city: "Mumbai"}
];

// indexOf fails because of object reference mismatch
console.log(arr1.indexOf({name: "Nithin", city: "Vizag"})); // -1 

// findIndex works
const index = arr1.findIndex(obj => obj.name === "Nithin" && obj.city === "Vizag");
console.log(index); //  1

// Custom find with spread and custom function
const arr2 = ['ab', 'cd', 'ef', 'gh', 'ij'];

const myfunc = (a, b, c, d, e) => {
    if (a == 'ab' && b == 'cd') {
        return true;
    } else return false;
};

const elem = arr2.find((value, index, array) => myfunc(...array));
console.log(elem); // 'ab'

// Correct usage of custom object find
const arr4 = [
    {name: "Raj", city: "Delhi", score: 24},
    {name: "Nithin", city: "Vizag", score: 34},
    {name: "Sara", city: "Mumbai", score: 45}
];

// Using find directly
const ans = arr4.find(obj => obj.name === 'Raj' && obj.city === 'Delhi');
console.log(ans); // {name: "Raj", city: "Delhi", score: 24}

const myfunc1 = (obj) => {
    if(obj.score < 25) {
        return `${obj.name}: You are failed`;
    } else {
        return `${obj.name}: You are passed`;
    }
};

const resarr = arr4.map(myfunc1);
console.log(resarr); // [true, false, false]

//array iteration methods
const arr5 = ["cat,", "dog", "elephant", "tiger"];
for(let i in arr5){
    const ele=arr5[i]; //print the keys unless specified
    console.log(ele,i); // 'cat,', 'dog', 'elephant', 'tiger'
}

for(let i of arr5){
    console.log(i); // 'cat,', 'dog', 'elephant', 'tiger' directly print the values
}

// forEach method
// const myfunc2 = (a,b) => {
//     a=10;
//     b=20;
//     console.log(a, b); // 10 20
//     console.log("Hello from forEach");
// }
// myfunc2(10, 20);
arr5.forEach((value, index) => {
    console.log(value, index); // 'cat,', 'dog', 'elephant', 'tiger' with index
});