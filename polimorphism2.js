//method overriding
class A {
    cal(n1,n2)
     {let  sum =n1 + n2
     console.log(sum);
     }
    
    cal(n1,n2)
     {let  pro =n1 * n2
     console.log(pro);
     }


    cal(n1,n2)
     {let  diff =n1 - n2
     console.log(diff);
     }
}
const obj = new A()
obj.cal(10,2)