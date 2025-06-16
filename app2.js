// let juice = 50;
// let gstOnjuice = 0.1;
// let fries = 70;
// let gstOnFries = 0.05;
// console.log("Total amount to be paid is: " + (juice + fries + (juice * gstOnjuice) + (fries * gstOnFries)));
let age = 22;
console.log("Start", age);

function printBill(name, amount){
    console.log("--------------");
    console.log("Name: " + name);
    console.log("Amount: " + amount);
    console.log("--------------");
} 

function calculatebillAmount(price,gst){
    // let juice = 50;
    // let gstOnjuice = 0.1;
    console.log("calculatebillAmount....");
    let BillAmount = price+price*gst;
    // console.log(juiceBillAmount);
    return BillAmount;
}
console.log("Mid");

const res1 = calculatebillAmount(50,0.1);
printBill("Juice", res1);
const res2 = calculatebillAmount(60,0.2);
printBill("Fries", res2);
console.log("End");