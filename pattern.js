//pattern printing

for(row=1;row<=4;row++){
    str="";
    for(col=1;col<=4;col++){
        str=str +"#";
    }
   
    console.log(str);
}
console.log('----------');

//1 1 1 1
//2 2 2 2 
//3 3 3 3
//4 4 4 4

for(row=1;row<=4;row++){
    str="";
for(col=1;col<=4;col++)
{
str+=row
}
console.log(str);

}
console.log('----------');

//1 2 3 4
//1 2 3 4 
//1 2 3 4
//1 2 3 4 

for(row=1;row<=4;row++){
    str="";
for(col=1;col<=4;col++)
{
str+=col
}
console.log(str);

}
console.log('----------');


//*
//* *
//* * *
//* * * * *

for(row=1;row<=4;row++){
    str="";
for(col=1;col<=row;col++)
{
str+='* '
}
console.log(str);

}
console.log('----------');



for(row=1;row<=4;row++){
    str="";
for(col=1;col<=row;col++)
{
str+='1 '
}
console.log(str);

}
console.log('----------');


//1 
//1 2
//1 2 3
//1 2 3 4

str =""
for(i=1;i<=4;i++)
{
    str=str+i
    console.log(str);
    
}

console.log('----------');



//1
//2 2
//3 3 3
//4 4 4 4 

for(row=1;row<=4;row++){
    str="";
for(col=1;col<=row;col++)
{
str+=row +''
}
console.log(str);

}
console.log('----------');


//* * * *
//* * *
//* *
//*

for(row=4;row>=1;row--){
    str="";
for(col=1;col<=row;col++)
{
str=str+'*'
}
console.log(str);

}


console.log('------------------');





//         *
//       *   *
//     *   *   *
//   *   *   *   *

for(row=1;row<=4;row++)
{
    str=""
    for(spa=4;spa>row;spa--){
        str = str+"  "
    }
    for(col=1;col<=row;col++)
    {
        str=str+"*   "
    }
    console.log(str);
}
console.log('------------------');

//*   *   *   *
 // *   *   *
  //  *   *
   //   *

for(row=4;row>=1;row--)
{
    str=""
    for(spa=4;spa>row;spa--){
        str = str+"  "
    }
    for(col=1;col<=row;col++)
    {
        str=str+"*   "
    }
    console.log(str);
}

console.log('------------------');


//*
//* *
//* * * *
//* * * * *     //HW
//* * * *
//* * *
//* *
//*

for(row=1;row<=4;row++){
    str="";
for(col=1;col<=row;col++)
{
str+='* '
}
console.log(str);

}
for(row=3;row>=1;row--){
    str="";
for(col=1;col<=row;col++)
{
str=str+'* '
}
console.log(str);

}
console.log('--------------------');


 //       *
//      *   *
//    *   *   *
//  *   *   *   *
//    *   *   *   
 //     *   *
   //     *
   
   for (let row = 1; row <= 4; row++) {
    let str = "";
    for (let spa = 4; spa > row; spa--) {
        str += "  ";
    }
    for (let col = 1; col <= row; col++) {
        str += "*   ";
    }
    console.log(str);
}
for (let row = 3; row >= 1; row--) {
    let str = "";
    for (let spa = 4; spa > row; spa--) {
        str += "  ";
    }
    for (let col = 1; col <= row; col++) {
        str += "*   ";
    }
    console.log(str);
}