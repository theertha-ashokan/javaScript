//[1000,'neel','developer','kochi',25000,3]

class Employee{
    //properties
    empid
    empName
    EmpDesg
    empLoc

    //constructor (is also a method-self ivoke ,when we create an instance that means called when a instance is created)
    constructor(id,name,desg,loc){
        this.empid = id
        this.empName = name
        this.EmpDesg = desg
        this.empLoc = loc
    }
    //method
    display(){
        console.log(`given name is ${this.empName}`);
        
    }
}
// real time entity
//creating object
const user1 = new Employee(1000,'Neel','Developer','koch')
user1 .display()

const user2 = new Employee(1001,'max','Developer','calicut')
user2 .display() 
