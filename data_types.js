"use strict";
let mobile = 8;
console.log(mobile);
let newOBJ = {
    name: 'Yashwant Sahu',
    age: 22
};
console.log(newOBJ);
let array = ["yash", 222];
console.log(array);
// how to define the variable with multiple Data types 
let multipleDataType = ["yashwant", 23];
console.log(multipleDataType);
// how to define the custom type 
// use [type] keyword as for defining the custom data type
// example type arr  = [string,number]
// how to define tuple in TS
let tuple = ["string", 45];
tuple.push(true);
// ? symbol is use the for future coming values 
// "any" type is use to define the all type of val in the var
// union Data type ( this data type is use define the multiple data type in one ) 
let union = 5;
console.log(union);
// literal Data type ( when you assign the direct value to the variable like follows )
let literal = "Harsh Sahu";
console.log(literal);
// use "type" for creating a type Alias
let a = true;
let b = true;
let c = 'yashwant';
console.log(c);
// type in function 
function hello() {
    return 2;
}
function Hey() {
    return;
}
console.log(Hey());
// void Data type in TS
function setVoid() {
    console.log(1 + 2);
}
// when function is returning anything it means its of void type 
// Unknown type in TS is special data type or we can say the in advance version of any
let foo;
foo = 233;
foo = "Yashwant";
let boo;
boo = foo;
let bee;
bee = "Harsh";
bee = 3434;
// boo = bee  it will express some because the unknown data will not allow to assign var to another var who has string if var had some past with number  
if (typeof bee === "string")
    boo = bee;
// never data type 
function tryreturn() {
    throw ({ message: "error" });
}
// when function throw error the excruciation break on the run time
