class User{

    protected y = "readonly";
    private x = "private";

    constructor(public address:string){ // shorthand props
     console.log(this.address)
    }
    private age: number = 12;    
    name:string = 'Yashwant sahu';


    addUser(age:number){
       this.age = age
        console.log(this.name)
    }

}
 
let user = new User('hello');

user.addUser(12)
user.name = "Harsh Sahu"
user.addUser(15)

// console.log(user.y);


class test extends User{
    getUser(){
        console.log(this.y)
    }

}

let ys = new test('hello');


ys.getUser();

// private which is only use within the class and its methods 
// public which can be use anywhere is the file
//protected which can be use in or out of the class but in the same module 