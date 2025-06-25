

//const...using variable before it declared in the case of const,this is not working

// console.log(x);
// const x = 'hello'



//case of var....this op is "undefined"

// console.log(x);
// var x = 'hello'


//case of let

// console.log(x);
// let x = 'hello'

//scope
i=0
for(var i=0; i<=5; i++)
    {
     console.log(i);
    }
    console.log('--------------');
    console.log(i); // here i=5 and again work i++ , so last value become 6,6<=5, final value is 6


