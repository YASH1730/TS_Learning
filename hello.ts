let mobile:number = 8

console.log(mobile);

// Code Data types in Ts are :=
// number 
// string 
// boolean

// How to define object in TS

type OBJ  = {name : string, age : number}

let newOBJ:OBJ = {
    name : 'Yashwant Sahu',
    age : 22
} 
console.log(newOBJ)

// How to define Array in TS


type arr  = [string,number]

let array:arr = ["yash",222]
console.log(array)

// how to define the variable with multiple Data types 

let multipleDataType : string | number | boolean | arr= ["yashwant",23]
console.log(multipleDataType)


// how to define the custom type 
// use [type] keyword as for defining the custom data type
 // example type arr  = [string,number]

 // how to define tuple in TS
  let tuple : [string,number,boolean?] = ["string",45]

  tuple.push(true)

  // ? symbol is use the for future coming values 

  // "any" type is use to define the all type of val in the var