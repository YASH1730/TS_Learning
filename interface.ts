
// NOTE ===================
// The main difference between the interface the type is the interface can be extendable weather as type doesn't 


interface setup{
    name : string,
    age : number,
    grade : boolean
}


interface setupChild extends setup{
    role? : 'Admin'
}

// type setup = { name : string,age : number,grade : boolean}

const obj:setupChild = {
    name : "Yashwant Sahu",
    age : 50,
    grade : true,
}

console.log(obj) 