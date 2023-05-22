class User{
    private age: number = 12;    
    name:string = 'Yashwant sahu';

    addUser(age:number){
       this.age = age
        console.log(this.name)
    }

}
 
let user = new User;

user.addUser(12)
user.name = "Harsh Sahu"
user.addUser(15)


// private which is only use within the class and its methods 
// public which can be use anywhere is the file
//protected which can be use in or out of the class but in the same module 