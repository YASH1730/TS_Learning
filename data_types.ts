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

  // union Data type ( this data type is use define the multiple data type in one ) 
  let union:string | number = 5;

  console.log(union)

  // literal Data type ( when you assign the direct value to the variable like follows )

  let literal:'Harsh Sahu'| 'Yashwant Sahu' = "Harsh Sahu"

  console.log(literal)

  // use "type" for creating a type Alias
  
  let a : string | boolean = true
  let b : string | boolean = true

//   or 

type typeSet = string | boolean

let c:typeSet = 'yashwant';

console.log(c)

// type in function 

function hello():number
{
    return 2
}

function Hey():undefined
{
    return 
}

console.log(Hey())

// void Data type in TS

function setVoid():void{
    console.log(1+2)
}

// when function is returning anything it means its of void type 

// Unknown type in TS is special data type or we can say the in advance version of any

let foo:any;
foo = 233;
foo = "Yashwant"

let boo:string;

boo = foo

let bee:unknown;

bee = "Harsh"
bee = 3434

// boo = bee  it will express some because the unknown data will not allow to assign var to another var who has string if var had some past with number  

if(typeof bee === "string")
    boo = bee

// never data type 

function tryreturn():never
{
    throw ({message : "error"})
}

// when function throw error the excruciation break on the run time
 