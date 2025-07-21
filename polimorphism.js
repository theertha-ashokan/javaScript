//methpod overloading

class A{
    methoda(){
    console.log('inside method a');
    }
    methoda(n1){
        console.log(`the given number is ${n1}`);
        
    }
   methoda(n1,n2){
        console.log(`the given two arguments are ${n1} and ${n2}`);
        
   }

}
const obj = new A()
obj.methoda(5,6)
obj.methoda()//first one work avanam,but last one aane work avunnath,so that means js doesnot support overloading