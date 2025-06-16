// let juice = 50;
// let gstOnjuice = 0.1;
// let fries = 70;
// let gstOnFries = 0.05;
// console.log("Total amount to be paid is: " + (juice + fries + (juice * gstOnjuice) + (fries * gstOnFries)));
let age = 22;
console.log("Start", age);

function calculateJuicebillAmount(){
    let juice = 50;
    let gstOnjuice = 0.1;
    let juiceBillAmount = juice+juice*gstOnjuice;
    console.log(juiceBillAmount);
}
console.log("Mid");

calculateJuicebillAmount();

console.log("End");