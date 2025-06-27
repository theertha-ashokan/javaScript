//           *
//        *     *
//    *             *
// *  *  *  *  *  *   *  

for(row=1;row<=4;row++){

    str = ""
    for(col=1;col<=7;col++)
    {
        if(row+col==5 || col-row==3 || row==4){
            str =str + "* "
        }
        else{
            str = str + "  "
        }
        
    }
     console.log(str);
}
 console.log('--------------------');


// * * * * *
// *       *
// *       *
// *       *
// * * * * *

for(row=1;row<=5;row++){
    str = ""
    for(col=1;col<=5;col++){
       if(row==1 || row==5 || col==1 || col==5 ) {
        str = str+"* "
       }
       else{
        str =str+ "  "
       }
    }
    console.log(str);
    
}
console.log('--------------------');

// * * * * *
//   *   *
//     *
//   *   *
// * * * * *

//1,1
//2,2
//3,3  =equal row and col
//4,4
//5,5


//1,5
//2,4
//4,2      =6
//5,1

for(row=1;row<=5;row++){
    str =""
    for (col= 1; col <=5;col++) {
        if( row==1 || row==5 || col+row==6||col==row){
            str= str+"* "
        }
        else{
            str=str+ "  "
        }
    }
    console.log(str);
    
}
console.log('---------------------');


//1
//0 1
//1 0 1
//0 1 0 1


for(row=1;row<=4;row++)
{
    str=" "
    for(col=1;col<=row;col++){
        if((row+col)%2==0)
       { str = str+"1 "}
    
    else{
         str = str+"0 "
    }
}
console.log(str);

}
