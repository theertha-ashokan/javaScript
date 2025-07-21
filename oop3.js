class Bank{
    //properties
    accountdetails ={
        1000:{acno:1000,username:'userone',password:'userone',balance:5000},

        1001:{acno:1001,username:'usertwo',password:'usertwo',balance:1000},

         1002:{acno:1002,username:'userthree',password:'userthree',balance:10000},
        
          1003:{acno:1003,username:'userfour',password:'userfour',balance:2000},
        
        
    }


//w.a.method to validate the account number
  Validate(acno){
      return acno in this.accountdetails?true:false
  }

//w.a.method to authendicate the account details
 authendicate(acno,pswd){
    if (this.Validate(acno)){
          if(this.accountdetails[acno].password==pswd){
            console.log('authentication successfull');
            
          }
          else{
            console.log('invalid acno or password');
            
          }
    }
     else{
       console.log('invalid acno or password');
       
    }
 }
//w.a.method to have a balance enquiry
 balanceEnquiry(acno,pswd){
    if(this.Validate(acno)){

        if(this.accountdetails[acno].password==pswd){
console.log(`balance of ${acno} is ${this.accountdetails[acno].balance}`);

        }
        else{
            console.log('invalid details');
            
        }
    }
    else{
        console.log('invalid details');
        
    }
 }

//ww.a.method to transfer fund
fundtransfer(fromacno, frompswd, toacno, ){

}

}


const obj = new Bank()

console.log(obj.Validate(1000)?'valid account number ':'invalid account number');
console.log('----------------------');


obj.authendicate(1001,'usertwo')
console.log('----------------------');

obj.balanceEnquiry(1000,'userone')
console.log('----------------------');
