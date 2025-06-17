// let juice = 50;
// let gstOnjuice = 0.1;
// let fries = 70;
// let gstOnFries = 0.05;
// console.log("Total amount to be paid is: " + (juice + fries + (juice * gstOnjuice) + (fries * gstOnFries)));
// let age = 22;
// console.log("Start", age);

// function printBill(name, amount){
//     console.log("--------------");
//     console.log("Name: " + name);
//     console.log("Amount: " + amount);
//     console.log("--------------");
// } 

// function calculatebillAmount(price, gst){
//     console.log("calculatebillAmount....");
//     let BillAmount = price + price * gst;
//     return BillAmount;
// }

// console.log("Mid");

// const res1 = calculatebillAmount(50, 0.1);
// printBill("Juice", res1);

// const res2 = calculatebillAmount(60, 0.2);
// printBill("Fries", res2);

// console.log("End");

// Arrow function version  DAY2
const FinalBill = (label, amount) => {
    console.log("--------------");
    console.log(label + ": " + amount);
    console.log("--------------");
};

const calculateBillAmountForFood = (price) => price * 1.05;
const calculateBillAmountForClothes = (price) => price * 1.12;
const calculateBillAmountForDrinks = (price) => price * 1.12;

const calculateBillForFoodandDrinks = (txt) => {
    console.log("Calculating bill for Food and drinks: " + txt);
    return txt;
};
const calculateBillForFood = (txt) => {
    console.log("Calculating bill for Food : " + txt);
    return txt;
};
const calculateBillForAll = (txt) => {
    console.log("Calculating bill for Food drinks and clothes : " + txt);
    return txt;
};

const finalBillAmount = (food, clothes, drinks,cb) => {
    const foodBill = calculateBillAmountForFood(food);
    const clothesBill = calculateBillAmountForClothes(clothes);
    const drinksBill = calculateBillAmountForDrinks(drinks);
    
    const totalBill = foodBill + clothesBill + drinksBill;
    
    cb(totalBill);
};

finalBillAmount(100, 200, 300, calculateBillForAll);
finalBillAmount(100, 200, 0, calculateBillForFoodandDrinks);
finalBillAmount(100, 0, 0, calculateBillForFood);
